// 游戏工具函数

/**
 * 获取游戏数据
 * @param {string} language - 语言代码
 * @returns {Promise<Array>} 游戏数据数组
 */
export async function getGameData(language = 'en') {
  try {
    const gameData = await import(`@/data/games/${language}.js`)
    return gameData.default
  } catch (error) {
    console.error(`Failed to load game data for language: ${language}`, error)
    // 如果加载失败，尝试加载英文版本
    if (language !== 'en') {
      try {
        const fallbackData = await import('@/data/games/en.js')
        return fallbackData.default
      } catch (fallbackError) {
        console.error('Failed to load fallback game data', fallbackError)
        return []
      }
    }
    return []
  }
}

/**
 * 根据ID获取单个游戏
 * @param {string|number} id - 游戏ID
 * @param {string} language - 语言代码
 * @returns {Promise<Object|null>} 游戏对象或null
 */
export async function getGameById(id, language = 'en') {
  const gameData = await getGameData(language)

  // 确保 gameData 是数组
  if (!Array.isArray(gameData)) {
    console.error('Game data is not an array:', gameData)
    return null
  }

  return gameData.find(game => game.id === id) || null
}

/**
 * 根据地址栏路径获取单个游戏
 * @param {string} addressBar - 地址栏路径
 * @param {string} language - 语言代码
 * @returns {Promise<Object|null>} 游戏对象或null
 */
export async function getGameByAddressBar(addressBar, language = 'en') {
  const gameData = await getGameData(language)

  // 确保 gameData 是数组
  if (!Array.isArray(gameData)) {
    console.error('Game data is not an array:', gameData)
    return null
  }

  return gameData.find(game => game.addressBar === addressBar) || null
}

/**
 * 获取所有游戏列表
 * @param {string} language - 语言代码
 * @param {Object} options - 选项
 * @param {number} options.limit - 限制数量
 * @param {number} options.offset - 偏移量
 * @returns {Promise<Object>} 游戏列表和分页信息
 */
export async function getGamesList(language = 'en', options = {}) {
  const { limit = 10, offset = 0 } = options
  const gameData = await getGameData(language)

  // 确保 gameData 是数组
  if (!Array.isArray(gameData)) {
    console.error('Game data is not an array:', gameData)
    return {
      games: [],
      pagination: {
        total: 0,
        limit,
        offset,
        hasMore: false,
        currentPage: 1,
        totalPages: 0
      }
    }
  }

  // 按发布日期降序排序
  const sortedGames = gameData.sort((a, b) =>
    new Date(b.publishDate) - new Date(a.publishDate)
  )

  const total = sortedGames.length
  const games = sortedGames.slice(offset, offset + limit)

  return {
    games,
    pagination: {
      total,
      limit,
      offset,
      hasMore: offset + limit < total,
      currentPage: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit)
    }
  }
}

/**
 * 格式化日期
 * @param {string} dateString - 日期字符串
 * @returns {string} 格式化后的日期
 */
export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * 从URL路径中提取游戏地址栏
 * @param {string} path - URL路径
 * @returns {string|null} 游戏地址栏或null
 */
export function extractGameAddressBar(path) {
  // 匹配 /games/xxx 或 /{lang}/games/xxx 格式
  const gameMatch = path.match(/\/(?:[a-z]{2}\/)?games\/(.+)$/)
  return gameMatch ? gameMatch[1] : null
}

/**
 * 生成游戏列表的SEO数据
 * @param {string} language - 语言代码
 * @returns {Object} SEO数据
 */
export async function getGameListSEO(language = 'en') {
  try {
    const locale = await import(`@/locales/${language}.json`)
    const seoData = locale.default?.seo?.games

    if (seoData) {
      return {
        title: seoData.title || "Games - No I'm Not a Human | iamnotahuman.org",
        description: seoData.description || "Play free online games related to No I'm Not a Human.",
        keywords: seoData.keywords || "No I'm not a Human games, free games, online games"
      }
    }
  } catch (error) {
    console.error(`Failed to load SEO data for games in language ${language}:`, error)
  }

  // 降级到默认值
  return {
    title: "Games - No I'm Not a Human | iamnotahuman.org",
    description: "Play free online games related to No I'm Not a Human. Explore narrative adventures, horror experiences, and interactive stories.",
    keywords: "No I'm not a Human games, free games, online games, horror games, narrative games, interactive fiction, iamnotahuman.org"
  }
}

/**
 * 生成单个游戏的SEO数据
 * @param {Object} game - 游戏对象
 * @returns {Object} SEO数据
 */
export function getGameSEO(game) {
  if (!game || !game.seo) {
    return {
      title: "Games - No I'm Not a Human | iamnotahuman.org",
      description: "Play free online games related to No I'm Not a Human.",
      keywords: "No I'm not a Human games, free games, online games"
    }
  }

  return {
    title: game.seo.title,
    description: game.seo.description,
    keywords: game.seo.keywords
  }
}


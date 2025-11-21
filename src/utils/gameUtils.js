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
export function getGameListSEO(language = 'en') {
  const seoData = {
    en: {
      title: "Games - No I'm Not a Human | iamnotahuman.org",
      description: "Play free online games related to No I'm Not a Human. Explore narrative adventures, horror experiences, and interactive stories.",
      keywords: "No I'm not a Human games, free games, online games, horror games, narrative games, interactive fiction, iamnotahuman.org"
    },
    zh: {
      title: "游戏 - No I'm Not a Human | iamnotahuman.org",
      description: "免费在线游玩与《No I'm Not a Human》相关的游戏。探索叙事冒险、恐怖体验和互动故事。",
      keywords: "No I'm Not a Human游戏, 免费游戏, 在线游戏, 恐怖游戏, 叙事游戏, 互动小说, iamnotahuman.org"
    },
    ja: {
      title: "ゲーム - No I'm Not a Human | iamnotahuman.org",
      description: "No I'm Not a Humanに関連する無料オンラインゲームをプレイ。物語アドベンチャー、ホラー体験、インタラクティブストーリーを探索。",
      keywords: "No I'm Not a Humanゲーム, 無料ゲーム, オンラインゲーム, ホラーゲーム, 物語ゲーム, インタラクティブフィクション, iamnotahuman.org"
    },
    ru: {
      title: "Игры - No I'm Not a Human | iamnotahuman.org",
      description: "Играйте в бесплатные онлайн-игры, связанные с No I'm Not a Human. Исследуйте повествовательные приключения, хоррор-опыты и интерактивные истории.",
      keywords: "игры No I'm Not a Human, бесплатные игры, онлайн игры, хоррор игры, повествовательные игры, интерактивная фантастика, iamnotahuman.org"
    },
    ko: {
      title: "게임 - No I'm Not a Human | iamnotahuman.org",
      description: "No I'm Not a Human와 관련된 무료 온라인 게임을 플레이하세요. 서사 모험, 공포 경험 및 대화형 스토리를 탐색하세요.",
      keywords: "No I'm Not a Human 게임, 무료 게임, 온라인 게임, 공포 게임, 서사 게임, 대화형 소설, iamnotahuman.org"
    },
    de: {
      title: "Spiele - No I'm Not a Human | iamnotahuman.org",
      description: "Spielen Sie kostenlose Online-Spiele im Zusammenhang mit No I'm Not a Human. Erkunden Sie narrative Abenteuer, Horror-Erlebnisse und interaktive Geschichten.",
      keywords: "No I'm Not a Human Spiele, kostenlose Spiele, Online-Spiele, Horror-Spiele, narrative Spiele, interaktive Fiktion, iamnotahuman.org"
    },
    fr: {
      title: "Jeux - No I'm Not a Human | iamnotahuman.org",
      description: "Jouez à des jeux en ligne gratuits liés à No I'm Not a Human. Explorez des aventures narratives, des expériences d'horreur et des histoires interactives.",
      keywords: "jeux No I'm Not a Human, jeux gratuits, jeux en ligne, jeux d'horreur, jeux narratifs, fiction interactive, iamnotahuman.org"
    },
    es: {
      title: "Juegos - No I'm Not a Human | iamnotahuman.org",
      description: "Juega juegos en línea gratuitos relacionados con No I'm Not a Human. Explora aventuras narrativas, experiencias de terror e historias interactivas.",
      keywords: "juegos No I'm Not a Human, juegos gratis, juegos en línea, juegos de terror, juegos narrativos, ficción interactiva, iamnotahuman.org"
    },
    pt: {
      title: "Jogos - No I'm Not a Human | iamnotahuman.org",
      description: "Jogue jogos online gratuitos relacionados a No I'm Not a Human. Explore aventuras narrativas, experiências de terror e histórias interativas.",
      keywords: "jogos No I'm Not a Human, jogos grátis, jogos online, jogos de terror, jogos narrativos, ficção interativa, iamnotahuman.org"
    }
  }

  return seoData[language] || seoData.en
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


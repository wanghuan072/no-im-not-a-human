// 博客工具函数

/**
 * 获取博客数据
 * @param {string} language - 语言代码
 * @returns {Promise<Array>} 博客数据数组
 */
export async function getBlogData(language = 'en') {
  try {
    const blogData = await import(`@/data/blogs/${language}.js`)
    return blogData.default
  } catch (error) {
    console.error(`Failed to load blog data for language: ${language}`, error)
    // 如果加载失败，尝试加载英文版本
    if (language !== 'en') {
      try {
        const fallbackData = await import('@/data/blogs/en.js')
        return fallbackData.default
      } catch (fallbackError) {
        console.error('Failed to load fallback blog data', fallbackError)
        return []
      }
    }
    return []
  }
}

/**
 * 根据ID获取单个博客
 * @param {string|number} id - 博客ID
 * @param {string} language - 语言代码
 * @returns {Promise<Object|null>} 博客对象或null
 */
export async function getBlogById(id, language = 'en') {
  const blogData = await getBlogData(language)

  // 确保 blogData 是数组
  if (!Array.isArray(blogData)) {
    console.error('Blog data is not an array:', blogData)
    return null
  }

  return blogData.find(blog => blog.id === id) || null
}

/**
 * 根据地址栏路径获取单个博客
 * @param {string} addressBar - 地址栏路径
 * @param {string} language - 语言代码
 * @returns {Promise<Object|null>} 博客对象或null
 */
export async function getBlogByAddressBar(addressBar, language = 'en') {
  const blogData = await getBlogData(language)

  // 确保 blogData 是数组
  if (!Array.isArray(blogData)) {
    console.error('Blog data is not an array:', blogData)
    return null
  }

  return blogData.find(blog => blog.addressBar === addressBar) || null
}

/**
 * 获取所有博客列表
 * @param {string} language - 语言代码
 * @param {Object} options - 选项
 * @param {number} options.limit - 限制数量
 * @param {number} options.offset - 偏移量
 * @returns {Promise<Object>} 博客列表和分页信息
 */
export async function getBlogsList(language = 'en', options = {}) {
  const { limit = 10, offset = 0 } = options
  const blogData = await getBlogData(language)

  // 确保 blogData 是数组
  if (!Array.isArray(blogData)) {
    console.error('Blog data is not an array:', blogData)
    return {
      blogs: [],
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
  const sortedBlogs = blogData.sort((a, b) =>
    new Date(b.publishDate) - new Date(a.publishDate)
  )

  const total = sortedBlogs.length
  const blogs = sortedBlogs.slice(offset, offset + limit)

  return {
    blogs,
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
 * 从URL路径中提取博客地址栏
 * @param {string} path - URL路径
 * @returns {string|null} 博客地址栏或null
 */
export function extractBlogAddressBar(path) {
  // 匹配 /blog/xxx 或 /{lang}/blog/xxx 格式
  const blogMatch = path.match(/\/(?:[a-z]{2}\/)?blog\/(.+)$/)
  return blogMatch ? blogMatch[1] : null
}

/**
 * 生成博客列表的SEO数据
 * @param {string} language - 语言代码
 * @returns {Object} SEO数据
 */
export async function getBlogListSEO(language = 'en') {
  try {
    const locale = await import(`@/locales/${language}.json`)
    const seoData = locale.default?.seo?.['blog-list']

    if (seoData) {
      return {
        title: seoData.title || "Blog - No I'm Not a Human Guides & Tips | iamnotahuman.org",
        description: seoData.description || "Read the latest blog posts about No I'm Not a Human.",
        keywords: seoData.keywords || "No I'm not a Human blog, game guides, horror game tips"
      }
    }
  } catch (error) {
    console.error(`Failed to load SEO data for blog-list in language ${language}:`, error)
  }

  // 降级到默认值
  return {
    title: "Blog - No I'm Not a Human Guides & Tips | iamnotahuman.org",
    description: "Read the latest blog posts about No I'm Not a Human. Get expert guides, tips, strategies, and insights to master the psychological horror experience.",
    keywords: "No I'm not a Human blog, game guides, horror game tips, strategy guides, iamnotahuman.org"
  }
}

/**
 * 生成单个博客的SEO数据
 * @param {Object} blog - 博客对象
 * @returns {Object} SEO数据
 */
export function getBlogSEO(blog) {
  if (!blog || !blog.seo) {
    return {
      title: "Blog - No I'm Not a Human | iamnotahuman.org",
      description: "Read the latest blog posts about No I'm Not a Human.",
      keywords: "No I'm not a Human blog, game guides, horror game tips"
    }
  }

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    keywords: blog.seo.keywords
  }
}

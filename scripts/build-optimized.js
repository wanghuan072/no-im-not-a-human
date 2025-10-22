#!/usr/bin/env node
import { execSync } from 'child_process'
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

console.log('🚀 开始优化构建...')

try {
  // 1. 清理之前的构建
  console.log('📦 清理之前的构建...')
  execSync('rm -rf dist', { stdio: 'inherit' })

  // 2. 构建项目
  console.log('🔨 构建项目...')
  execSync('npm run build', { stdio: 'inherit' })

  // 3. 优化构建输出
  console.log('⚡ 优化构建输出...')
  
  // 读取构建后的index.html
  const indexPath = join(process.cwd(), 'dist', 'index.html')
  let indexContent = readFileSync(indexPath, 'utf8')
  
  // 添加关键资源预加载
  const preloadLinks = `
  <link rel="preload" href="/images/1.webp" as="image" fetchpriority="high">
  <link rel="preload" href="/images/about-img.webp" as="image">
  <link rel="preload" href="/images/logo.webp" as="image">
  `
  
  // 在head标签内添加预加载链接
  indexContent = indexContent.replace(
    '</head>',
    `${preloadLinks}\n  </head>`
  )
  
  // 添加性能监控脚本
  const performanceScript = `
  <script>
    // 性能监控
    window.addEventListener('load', () => {
      if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0]
        console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms')
        
        // 发送性能数据到分析服务（如果需要）
        if (window.gtag) {
          gtag('event', 'page_load_time', {
            value: Math.round(perfData.loadEventEnd - perfData.loadEventStart)
          })
        }
      }
    })
  </script>
  `
  
  indexContent = indexContent.replace(
    '</body>',
    `${performanceScript}\n  </body>`
  )
  
  // 写回优化后的文件
  writeFileSync(indexPath, indexContent)
  
  console.log('✅ 构建优化完成!')
  console.log('📊 构建统计:')
  
  // 显示构建统计
  try {
    const stats = execSync('du -sh dist', { encoding: 'utf8' })
    console.log(`📁 构建大小: ${stats.trim()}`)
  } catch (e) {
    console.log('📁 无法获取构建大小统计')
  }
  
} catch (error) {
  console.error('❌ 构建失败:', error.message)
  process.exit(1)
}

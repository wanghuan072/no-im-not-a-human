#!/usr/bin/env node
import { execSync } from 'child_process'

console.log('🚀 开始构建...')

try {
  // 1. 清理之前的构建
  console.log('📦 清理之前的构建...')
  execSync('rm -rf dist', { stdio: 'inherit' })

  // 2. 构建项目（会自动触发 postbuild 钩子生成 sitemap）
  console.log('🔨 构建项目...')
  execSync('npm run build', { stdio: 'inherit' })
  
  console.log('✅ 构建完成!')
  
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


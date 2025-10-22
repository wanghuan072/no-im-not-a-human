import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // 优化构建配置以减少包大小
    rollupOptions: {
      output: {
        // 优化的代码分割策略 - 进一步减少主包大小
        manualChunks: (id) => {
          // 第三方库 - 分离主要依赖
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue-vendor'
            if (id.includes('vue-router')) return 'router-vendor'
            if (id.includes('vue-i18n')) return 'i18n-vendor'
            if (id.includes('pinia')) return 'pinia-vendor'
            return 'vendor'
          }
          
          // 页面组件 - 按功能分组
          if (id.includes('/views/')) {
            const viewName = id.split('/views/')[1].split('.vue')[0]
            if (viewName === 'HomeView') return 'home'
            if (viewName.includes('Guide')) return 'guides'
            if (viewName.includes('Blog')) return 'blog'
            return 'pages'
          }
          
          // 工具和组件 - 分离到独立chunk
          if (id.includes('/utils/')) return 'utils'
          if (id.includes('/components/')) return 'components'
          if (id.includes('/seo/')) return 'seo'
          
          // 主包只保留核心逻辑
          return undefined
        },
        // 优化CSS输出
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // 使用 Vite 默认压缩器（esbuild）
    minify: 'esbuild',
    // esbuild 压缩选项
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 500,
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 启用sourcemap（开发环境）
    sourcemap: false,
    // CSS优化配置
    css: {
      // 启用CSS压缩
      minify: true,
      // 启用CSS Tree-shaking
      devSourcemap: false,
      // 启用CSS代码分割
      codeSplit: true,
      // 启用CSS Purging，移除未使用的CSS
      postcss: {
        plugins: [
          // 这里可以添加PurgeCSS插件来移除未使用的CSS
        ]
      }
    },
  },
  // 开发服务器优化
  server: {
    // 启用HTTP/2推送
    http2: true,
  }
})
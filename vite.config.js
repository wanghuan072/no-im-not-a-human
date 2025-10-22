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
        // 更精细的代码分割
        manualChunks: (id) => {
          // Vue核心库
          if (id.includes('vue') && !id.includes('node_modules')) {
            return 'vue-core'
          }
          // 第三方库
          if (id.includes('node_modules')) {
            if (id.includes('vue-router')) return 'vue-router'
            if (id.includes('vue-i18n')) return 'vue-i18n'
            if (id.includes('pinia')) return 'pinia'
            return 'vendor'
          }
          // 页面组件
          if (id.includes('/views/')) {
            const viewName = id.split('/views/')[1].split('.vue')[0]
            return `view-${viewName.toLowerCase()}`
          }
          // 工具库
          if (id.includes('/utils/')) {
            return 'utils'
          }
          // SEO相关
          if (id.includes('/seo/')) {
            return 'seo'
          }
        }
      }
    },
    // 启用代码压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 500,
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 启用sourcemap（开发环境）
    sourcemap: false,
  },
  // 开发服务器优化
  server: {
    // 启用HTTP/2推送
    http2: true,
  }
})

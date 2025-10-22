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
        // 更精细的代码分割 - 避免重复优化
        manualChunks: (id) => {
          // 第三方库 - 按功能分组
          if (id.includes('node_modules')) {
            if (id.includes('vue/')) return 'vue-runtime'
            if (id.includes('vue-router')) return 'vue-router'
            if (id.includes('vue-i18n')) return 'vue-i18n'
            if (id.includes('pinia')) return 'pinia'
            if (id.includes('@vue/')) return 'vue-compiler'
            return 'vendor'
          }
          
          // 页面组件 - 按路由分组
          if (id.includes('/views/')) {
            const viewName = id.split('/views/')[1].split('.vue')[0]
            // 首页单独分组，其他页面合并
            if (viewName === 'HomeView') return 'home'
            if (['GuidesView', 'EndingsView', 'WikiView'].includes(viewName)) return 'content'
            if (['AboutView', 'ContactView'].includes(viewName)) return 'info'
            return 'pages'
          }
          
          // 工具库和SEO - 保持分离
          if (id.includes('/utils/')) return 'utils'
          if (id.includes('/seo/')) return 'seo'
          if (id.includes('/components/')) return 'components'
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
    },
  },
  // 开发服务器优化
  server: {
    // 启用HTTP/2推送
    http2: true,
  }
})

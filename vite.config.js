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
        // 手动分包以减少主包大小
        manualChunks: {
          // 将Vue相关库分离
          'vue-vendor': ['vue', 'vue-router', 'vue-i18n'],
          // 将Pinia状态管理分离
          'pinia': ['pinia'],
          // 将工具库分离
          'utils': ['@/utils/blogUtils.js', '@/utils/localizeLinks.js', '@/utils/useDeviceDetection.js']
        }
      }
    },
    // 启用代码压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        // 移除console.log（生产环境）
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 1000,
  },
  // 开发服务器优化
  server: {
    // 启用HTTP/2推送
    http2: true,
  }
})

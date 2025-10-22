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
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 将Vue相关库分离
          if (id.includes('vue') || id.includes('vue-router') || id.includes('pinia')) {
            return 'vue-vendor';
          }
          // 将i18n相关分离
          if (id.includes('vue-i18n')) {
            return 'i18n-vendor';
          }
          // 将工具函数分离
          if (id.includes('utils')) {
            return 'utils-vendor';
          }
          // 将博客相关分离
          if (id.includes('blog')) {
            return 'blog-vendor';
          }
          // 将语言文件分离
          if (id.includes('locales') || id.includes('.json')) {
            return 'locales-vendor';
          }
          // SEO模块不分离，与主应用一起加载
        }
      }
    },
    // 启用代码压缩
    minify: 'esbuild',
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 1000
  }
})

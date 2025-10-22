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
        manualChunks: {
          // 将Vue相关库分离
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          // 将i18n相关分离
          'i18n-vendor': ['vue-i18n']
        }
      }
    },
    // 启用代码压缩
    minify: 'esbuild',
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 1000,
    // Cloverpit策略：并行构建
    target: 'esnext',
    cssCodeSplit: true,
    sourcemap: false
  },
  // Cloverpit策略：并行处理
  esbuild: {
    target: 'esnext',
    format: 'esm'
  }
})

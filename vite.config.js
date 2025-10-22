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
        // 简化的代码分割策略 - 避免循环依赖
        manualChunks: (id) => {
          // 第三方库 - 保持简单分组
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue-vendor'
            return 'vendor'
          }
          
          // 页面组件 - 避免过度分割
          if (id.includes('/views/')) {
            const viewName = id.split('/views/')[1].split('.vue')[0]
            // 首页单独分组
            if (viewName === 'HomeView') return 'home'
            // 其他页面合并
            return 'pages'
          }
          
          // 组件和工具 - 合并到主包避免循环依赖
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
      // 启用更激进的压缩
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
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
    // 优化JavaScript输出
    rollupOptions: {
      output: {
        // 简化的代码分割策略 - 避免循环依赖
        manualChunks: (id) => {
          // 第三方库 - 保持简单分组
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue-vendor'
            return 'vendor'
          }
          
          // 页面组件 - 避免过度分割
          if (id.includes('/views/')) {
            const viewName = id.split('/views/')[1].split('.vue')[0]
            // 首页单独分组
            if (viewName === 'HomeView') return 'home'
            // 其他页面合并
            return 'pages'
          }
          
          // 组件和工具 - 合并到主包避免循环依赖
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
  },
  // 开发服务器优化
  server: {
    // 启用HTTP/2推送
    http2: true,
  }
})
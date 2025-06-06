import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import legacy from "@vitejs/plugin-legacy"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 处理打包后跨域问题
    legacy({
      targets: ["ie>=11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"], //解决跨域警告
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: './', // 用于处理打包后的静态文件路径找不到问题
  resolve: {
    // 配置别名
    alias: {
      "@": path.resolve("./src") // 相对路径别名配置，使用别名@代替 src
    },
    // extensions 数据的意思是在import组件的时候自动补全.vue等文件后缀
    extensions: ['.js', '.vue', 'ts']
  },
  //配置scss全局变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/variable.scss" as *;'
      },
      // less: {
      //   modifyVars: {
      //     'primary-color': '#1DA57A', // 全局修改 Less 变量
      //   },
      //   javascriptEnabled: true, // 启用 Less 中的 JavaScript 特性
      // },
      // stylus: {
      //   // Stylus 特有的配置
      //   preferPathResolver: 'webpack', // 配置路径解析器
      // }
    }
  },
  build: {
    rollupOptions: {
      
    }
  }
})

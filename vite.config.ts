import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
// import legacy from "@vitejs/plugin-legacy"
import path from 'path'
// const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
//  legacy({
//     targets: ["ie>=11"],
//     additionalLegacyPolyfills: ["regenerator-runtime/runtime"], //解决跨域警告
//   }),

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 处理打包后跨域问题
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    // 组件无需声明 就可引入
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // visualizer() // 查看打包体积
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
    assetsInlineLimit: 0, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    rollupOptions: {
      output: {
        // entryFileNames: 'js/[name]-[hash].js', // 代码分割后入口文件的名称（入口 chunk）
        // chunkFileNames: 'js/[name]-[hash].js', // 代码分割时对模块的自定义命名 即除了入口文件的路由文件
        // assetFileNames: (assetsInfo) => {
        //   if (assetsInfo.names[0].endsWith('.css')) {
        //     return '.css/[name]-[hash].css'
        //   } else if (imageExtensions.some(ext => assetsInfo.names[0].endsWith(ext))) {
        //     return 'images/[name]-[hash].[ext]'
        //   } else {
        //     return '[asstes]/[name]-[hash].[ext]'
        //   }
        // },
        // format: 'module'
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'ventor'
          } else if (id.includes('pages')) {
            console.log('id==>', id)
          }
        }
      },
    },
  }
})

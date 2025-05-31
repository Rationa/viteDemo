import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      "@": path.resolve("./src") // 相对路径别名配置，使用别名@代替 src
    },
    // extensions 数据的意思是在import组件的时候自动补全.vue等文件后缀
    extensions: ['.js', '.vue', 'ts']
  }
})

import { createApp } from 'vue'
import '@/styles/index.scss' // 引入index.scss 文件 包含初始化文件
import './style.css'
// 引入element-plus样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, {locale}).mount('#app')

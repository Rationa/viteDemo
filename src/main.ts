import { createApp } from 'vue'
import '@/styles/index.scss' // 引入index.scss 文件 包含初始化文件
import './style.css'
// 引入element-plus样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.mjs'

import router from './router/index.ts'
import App from './App.vue'

const app = createApp(App)

// 使 v-highlight 在所有组件中都可用
app.directive('highlight', {
  /* ... */
  mounted: (el: HTMLElement) => {
    el.classList.add('is-highlight')
  }
})

app.directive('color', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  console.log("el==>", el)
  console.log("binding==>", binding)
  el.style.color = binding.value
})
app.use(router);
app.use(ElementPlus, { locale }).mount('#app')

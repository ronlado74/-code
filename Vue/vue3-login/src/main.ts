import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')

//路由前置守卫
const whiteList = ['/']
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
})

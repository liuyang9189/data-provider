import { createApp } from 'vue'
import './assets/reset.css'
import App from './App.vue'
import gloablPlugins from '@/plugins'




import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(gloablPlugins)
app.mount('#app')

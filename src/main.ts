import { createApp } from 'vue'
import { globalRegister } from './global'
import '@/assets/css/index.less'
import 'normalize.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'

import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
// path: /user => user
app.use(router)

app.mount('#app')

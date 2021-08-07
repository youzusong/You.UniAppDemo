import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import { router, RouterMount } from './router'

Vue.use(uView)
Vue.use(router)
Vue.config.productionTip = false
App.mpType = 'app'

// 注册全局组件
import AppWrapper from '@/components/AppWrapper'
Vue.component('AppWrapper', AppWrapper)

const app = new Vue({
	...App
})

// #ifdef H5
RouterMount(app,router,'#app')
// #endif
// #ifndef H5
app.$mount()
// #endif

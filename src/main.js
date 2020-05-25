import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'

import Snotify from 'vue-snotify'
import 'vue-snotify/styles/material.css'

Vue.use(Snotify)

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')

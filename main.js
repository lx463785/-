import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import config from './common/config.js'
Vue.prototype.config=config
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'

// 注册vuex
Vue.use(Vuex)

// 导出一个新生成的Store对象
export default new Vuex.Store({
    modules: {
        app,
        user
    },
})

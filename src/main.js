// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
import App from './App'
import Vuex from 'vuex'
Vue.use(Vuex)

import vuexI18n from 'vuex-i18n'

/**
* you can add your module here
*/
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})

Vue.use(vuexI18n.plugin, store)

// plugins
import { LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LocalePlugin)

// test
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}

/* eslint-disable no-new */

const routes = []
const router = new VueRouter({
  routes
})
sync(store, router)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

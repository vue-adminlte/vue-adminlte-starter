import Vue from 'vue'
import Router from 'vue-router'

import WebStarter from '@/components/WebStarter'
import AppStarter from '@/components/AppStarter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'AppStarter',
    component: AppStarter
  }, {
    path: '/WebStarter',
    name: 'WebStarter',
    component: WebStarter
  }, {
    path: '/AppStarter',
    component: AppStarter
  }]
})

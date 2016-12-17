// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import animate from 'animate.css'
// import iconfont from '//at.alicdn.com/t/font_q0xjrfdb9lcv7vi.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})

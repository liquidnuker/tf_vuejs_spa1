import "./styles/main.scss"

import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from "./vue-components/header.vue"
import Footer from "./vue-components/footer.vue"

// Vue.use(VueRouter)

new Vue({
  el: '#vc-header-mount',
  render: h => h(Header)
})

new Vue({
  el: '#vc-footer-mount',
  render: h => h(Footer)
})
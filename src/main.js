import './assets/stylesheets/main.css'

import Layout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('layout', Layout)
}

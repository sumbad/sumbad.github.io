import './polyfills';

import './main.scss';
import './public/font-awesome/scss/font-awesome.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app/App.vue';

import routes from './routes';



Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
})

var app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

document.addEventListener('DOMContentLoaded', function () {
  app.$mount('#app')
});
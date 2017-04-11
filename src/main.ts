// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// console.log(2222222222222222222222)


import Vue from 'vue';
import App from './App.vue';


// mount
var root = new Vue({
  el: '#app',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
});


document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})

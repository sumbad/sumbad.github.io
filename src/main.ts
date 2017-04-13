// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// console.log(2222222222222222222222)


import Vue from 'vue';
import Page from './Page.vue';


// mount
var root = new Vue({
  el: '#page',
  render: h => h(Page, {
    props: { propMessage: 'World' }
  })
});


document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#page')
});

window['adjustIframeSize'] = function adjustIframeSize(iframeId:string, newHeight: any) {
	var i = document.getElementById(iframeId);
  console.log(iframeId, i)
  if(i){
    i.style.height = parseInt(newHeight) + "px";
  }
}
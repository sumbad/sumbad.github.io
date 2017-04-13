<template>
        <section id="page" class="page">

          <h2 class="entry-title">
            Использование Vue.js для создания пользовательских Web компонентов
          </h2>

          <p class="lead">
            <strong>Web компоненты позволяют определять новые HTML теги,</strong> которые принято называть пользовательскими элементами (custom elements).
            Эти теги могут быть в дальнейшем использованы непосредственно в HTML коде вашего приложения подобно этому:
          </p>
          <!--<div v-html="`<iframe src='gists/84cb537ad664af6a299329c9c97960c3.html'></iframe>`"></div>        -->
          <!--<iframe id="iframe" scrolling="no" style="width:100%" ref="iframe"></iframe>-->
          <Gist iframeId="84cb537ad664af6a299329c9c97960c3"/>

          <p class="lead">В этом примере, <span v-text="`<share-buttons/>`"></span> будет интерпретирован браузером и "заменен" HTML разметкой, которую вы для 
          него определили. В результате получим:</p>
          <Gist iframeId="e9ea19cb422c98942137e9e3db39c426"/>
          <!--<iframe id="iframe" scrolling="no" style="width:100%" ref="iframe"></iframe>-->

          <p class="lead">Так же здесь можно было бы использовать JS логику для того, чтобы при событии click 
            делиться данной страницей через Facebook или Twitter.
          </p>

          <p class="lead">
            <strong>Web компоненты подобны Vue.js компонентам.</strong> Они имеют жизненный цикл (lifecycle), свойства и могут быть вложенными.
            Их API менее мощный, но зато следует стандарту определенному в 
            <a href="https://www.w3.org/standards/techs/components#w3c_all">W3C спецификации</a>.
          </p>

          <p class="lead">
            <strong>Проблема. Web компоненты не имеют полной поддержки в браузерах до настоящего момента.</strong>
            Посмотреть поддержку Web компонентов браузерами можно на сайте 
            <a href="http://jonrimmer.github.io/are-we-componentized-yet/">are-we-componentized-yet</a> 
            или <a href="http://caniuse.com/#search=web%20components">caniuse.com</a>.
          </p>

          <p class="lead">
            Но, применив немного JS магии <strong>вы можете прямо сейчас перевести ваш Vue.js компонент в Web компоненты, </strong>
            что позволит использовать его в любых web приложениях, даже вместе с React, Angular или <имя-вашего-любимого-framework>.
          </p>

          <h3>Как получить из вашего Vue.js компонента универсальные Web компоненты</h3>

          <p class="lead">
            Понадобиться <a href="https://karol-f.github.io/vue-custom-element">vue-custom-element</a>
            библиотека написанная <a href="https://github.com/karol-f">@karol-f</a>. Она позволит вам 
            <strong>использовать Vue.js компонент как пользовательский элемент </strong>.
          </p>

        </section>
</template>


<script lang="ts">


import Vue from 'vue';
import Component from 'vue-class-component';
import Gist from './Gist.vue';



@Component({
  components: {
    Gist
  }
})
export default class Page extends Vue {
  propMessage: string
  // inital data
  msg: number = 77777;
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
  // lifecycle hook
  mounted() {
  }
  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }
  // method
  greet() {
    alert('greeting: ' + this.msg)
  }
}


</script>

<style lang="scss">
  strong, b {
    font-size: 18px;
    font-weight: bold;
  }

  a {
    font-weight: bold;
  }
// .gist-meta {
//   display: none;
// }
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>

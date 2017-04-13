<template>
        <section id="page" class="page">

          <h2 class="entry-title">
            Использование Vue.js для создания пользовательских Web компонентов
          </h2>

          <p class="lead">Web компоненты позволяют определять новые HTML теги, которые принято называть пользовательскими элементами (custom elements).
            Эти теги могут быть в дальнейшем использованы непосредственно в HTML коде вашего приложения подобно этому:
          </p>
          <div id="s" ref="s"></div>              
          <!--<div v-html="`<iframe src='gists/84cb537ad664af6a299329c9c97960c3.html'></iframe>`"></div>        -->
          <iframe id="iframe" scrolling="no" style="width:100%" ref="iframe"></iframe>

          <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu
            exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit
            commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat
            non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit
            minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi
            non ut enim aliqua laborum mollit quis nostrud sed sed.</p>

          <p>Lorem ipsum Nisi enim est proident est magna occaecat dolore proident eu ex sunt consectetur consectetur dolore
            enim nisi exercitation adipisicing magna culpa commodo deserunt ut do Ut occaecat. Lorem ipsum Veniam consequat
            quis aliquip dolore minim ex labore dolor Excepteur Duis velit in officia Excepteur officia officia officia cillum
            ut elit in fugiat incididunt ea ad Ut ut ea ea dolor ex dolor eu magna voluptate irure consectetur.</p>

          <div class="row">

            <div class="six columns left">

              <h5>Our Process.</h5>

              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

            </div>

            <div class="six columns right">

              <h5>Our Approach.</h5>

              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

            </div>

          </div>

          <div class="row">

            <div class="six columns left">

              <h5>Our Goal.</h5>

              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

            </div>

            <div class="six columns right">

              <h5>Our Mission.</h5>

              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>

            </div>

          </div>

        </section>
</template>


<script lang="ts">


import Vue from 'vue';
import Component from 'vue-class-component';

console.log(1111111111111111)

@Component({
})
export default class Page extends Vue {
  propMessage: string
  // inital data
  msg: number = 77777;
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
  // lifecycle hook
  mounted () {
      var doc = this.$refs.iframe['contentDocument'] || this.$refs.iframe['contentWindow'];

      doc.open();
      doc.write('<html><style>.gist-meta {display: none;} .gist {line-height: inherit !important; font-size: 14px !important;}</style><body><scr' + 'ipt type="text/javascript" src="https://gist.github.com/sumbad/84cb537ad664af6a299329c9c97960c3.js"></sc'+'ript></body></html>');
      doc.close();

  }
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }
  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}

</script>

<style lang="scss">
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

a {
  color: #42b983;
}
</style>

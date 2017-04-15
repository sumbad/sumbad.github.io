<template>
  <iframe :id="iframeId"
          scrolling="no"
          style="width:100%; height:0">
  </iframe>
</template>



<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  props: {
    iframeId: String
  }
})
export default class Gist extends Vue {
  iframeId: string;
  
  mounted () {
      let doc = this.$el['contentDocument'] || this.$el['contentWindow'];

      doc.open();
      doc.write(`
      <html>
        <style>
          .gist-meta {
            display: none;
          } 
          .gist .blob-code {
            line-height: 25px !important; 
            font-size: 14px !important;
          }
        </style>
        <body>
          <link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-9f0a4ad9c85ca776e669003688baa9d55f9db315562ce4d231d37dab2714c70a.css">
          <scr`+`ipt type="text/javascript" src="https://gist.github.com/sumbad/${this.iframeId}.js"></sc`+`ript>
        </body>
      </html>`);
      doc.close();

    this.$el['contentWindow'].onload = () => {
      this.$el.style.height = doc.body.scrollHeight + "px";
    }
  }
}
</script>



<style lang="scss"></style>

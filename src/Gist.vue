<template>
  <iframe :id="iframeId"
          scrolling="no"
          style="width:100%">
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
        <body onload="parent.adjustIframeSize('${this.iframeId}',document.body.scrollHeight)">
          <scr`+`ipt type="text/javascript" src="https://gist.github.com/sumbad/${this.iframeId}.js"></sc`+`ript>
        </body>
      </html>`);
      doc.close();
  }
}
</script>



<style lang="scss"></style>

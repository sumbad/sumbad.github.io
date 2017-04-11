<template>
  <div>11111111111111111111111111</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {
  propMessage: string
  // inital data
  msg: number = 77777;
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
  // lifecycle hook
  mounted () {
    // this.greet()
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
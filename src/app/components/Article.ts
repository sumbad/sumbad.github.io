import Vue from 'vue';
import Component from 'vue-class-component';

import articles from '../../data/articles/articles';
import Gist from './Gist.vue';



@Component({
  props: {
    article: String
  },
  components: {
    Gist
  }
})
export default class Article extends Vue {
  article: string;
  _article: any;


  created() {
    this._article = articles.find(article => this.article === article.name)
    if (this._article) {
      this.$options.template = this._article.template;
    } else {
      this.$router.push('/');
    }
  }
}
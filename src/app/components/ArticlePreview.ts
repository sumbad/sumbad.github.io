import Vue from 'vue';
import Component from 'vue-class-component';

import articles from '../../data/articles/articles';



@Component({
  props: {
    article: String
  }
})
export default class ArticlePreview extends Vue {
  article: string;
  _article: any;


  created() {
    this._article = articles.find(article => this.article === article.name)
    if (this._article) {
      this.$options.template = this._article.preview;
    } else {
      this.$router.push('/');
    }
  }
}
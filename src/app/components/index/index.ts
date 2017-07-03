import Vue from 'vue';
import Component from 'vue-class-component';
import ArticlePreview from '../ArticlePreview';
import articles from '../../../data/articles/articles';


@Component({
  components: {
    ArticlePreview
  },
  // template: require('./index.htm')
})
export default class Index extends Vue {
  listArticles = articles.sort((a, b) => {
    return (b.datePublished.getTime() - a.datePublished.getTime());
  });
}
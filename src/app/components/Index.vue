<template>
    <div>
        <article-preview v-for="article in listArticles" :key="article.name" :article="article.name"/>
    </div>
</template>



<script lang="ts">
  
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import ArticlePreview from './ArticlePreview';
  import articles from '../../data/articles/articles';


  @Component({
    components: {
      ArticlePreview
    }
  })
  export default class Index extends Vue {
      listArticles = articles;
  }
</script>
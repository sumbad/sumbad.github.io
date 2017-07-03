<template>
  <div>
    <article-preview v-for="article in listArticles" :key="article.name" :article="article.name"></article-preview>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
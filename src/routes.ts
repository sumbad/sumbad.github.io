import Article from './app/components/Article';
import Index from './app/components/Index.vue';



export default [
    { path: '/', component: Index },
    { path: '/:article', component: Article, props: true }
];
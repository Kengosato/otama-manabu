<template>
  <div>
    <header class="tag-page header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">おおたまを学ぶ</a>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
        <!--<h2>{{ tag }} ({{ posts.length }})</h2>-->
        <h2>{{ tag }}</h2>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts" :key="post.id">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'


export default {
  components: {
    ArticlePreview,
    Navigation
  }
}
</script>

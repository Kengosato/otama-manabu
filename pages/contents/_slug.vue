<template>
  <div>
    <header class="article header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">おおたまを学ぶ</a>
          <Navigation></Navigation>
        </div>
      </div>
      <div>

      </div>
    </header>
    <a v-if= "$route.path === /contents/ + post.slug" v-for="post in posts" :key="post.id">
      <article-preview :post="post"></article-preview>
  </a>
  </div>
</template>

<script>
import wp from '~/lib/wp'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'

export default {
  asyncData ({ params }) {
    return wp.posts()
  },
  components: {
    Navigation,
    ArticlePreview
  }
}
</script>

<style>

.foreground .page-bar {
  border-bottom: 0;
}

.headline {
  padding: 3em 0 0;
}

.headline h1 {
  font-size: 3.5em;
}

.copy {
  padding-bottom: 7em;
}

.copy *:not(div) {
  margin: 2em 0 1em;
}

.copy h3 {
  font-size: 1.35em;
}

.copy ul {
  margin: 0;
  padding-left: 1em;
  list-style: disc;
}

.copy li {
  margin: 0;
}

</style>

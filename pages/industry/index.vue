<template>
  <div>
    <header class="blog header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">おおたまを学ぶ</a>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>おおたまの産業</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
      </div>
      <ul class="items-list wrapper">
        <a v-for="post in posts" v-if="$route.name === post.category_slug" :key="post.id">
                <li class="item">
                  <article-list-preview :post="post"></article-list-preview>
                </li>
              </a>
      </ul>
    </section>

  </div>
</template>

<script>
import wp from '~/lib/wp'
import Navigation from '~/components/navigation.vue'
import ArticleListPreview from '~/components/article-list-preview.vue'

export default {
  asyncData ({ params }) {
    return wp.posts()
  },
  components: {
    ArticleListPreview,
    Navigation
  }
}
</script>

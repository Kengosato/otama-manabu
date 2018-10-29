<template>
  <div>
    <header class="blog header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">おおたまを学ぶ</a>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>おおたまの地理</h2>
          <h3>大玉村は豊かな自然に恵まれ、その自然から様々な恩恵を受けながら私たちは暮らしています。どのような自然環境にあるのでしょうか。</h3>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
      </div>
      <ul class="items-list wrapper">
        <a v-for="post in posts" :key="post.id" v-if="$route.name === post.category_slug">
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
    Navigation,
    ArticleListPreview
  }
}
</script>

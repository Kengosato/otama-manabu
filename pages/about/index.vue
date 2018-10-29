<template>
  <div>
    <header class="blog header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">おおたまを学ぶ</a>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>About</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
        <h2>おおたまをまなぶとは？？</h2>
      </div>
      <ul class="items-list wrapper">
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

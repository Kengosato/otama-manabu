<template>
  <div>
    <header class="blog header">
      <div class="foreground">
        <div class="title">
        <h1><a href="/" class="title">おおたまを学ぶ</a></h1>
      </div>
        <div class="page-bar wrapper">
          <Navigation></Navigation>
        </div>
        <div class="page-bar wrapper">
          <h2>おおたまの自然</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="item in items" :key="item.id">
          <category-preview-2 :item="item"></category-preview-2>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import wp from '~/lib/wp'
import Navigation from '~/components/navigation.vue'
import CategoryPreview2 from '~/components/category-preview-2.vue'

export default {
  asyncData ({ params }) {
    return wp.posts()
  },
  components: {
    Navigation,
    CategoryPreview2
  },
  data: function () {
    return {
      items: [
        { title: 'おおたまの地理', path: 'chiri', imagepath: 'images/chiri.jpg' },
        { title: '大玉の気候', path: 'kikou', imagepath: 'images/kikou.jpg' },
        { title: 'おおたまの災害', path: 'saigai', imagepath: 'images/saigai.jpg' },
        { title: 'おおたまの植生', path: 'syokusei', imagepath: 'images/syokusei.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.home .page-bar {
  border-bottom: 1px solid #4e4b5f;
}

.home .page-info {
  padding-top: 1%;
}

.page-info h2 {
  font-size: 1.5em;
}
.page-bar h1 {
}
.home .title {
  font-size: 1em;
  text-align: center;
}

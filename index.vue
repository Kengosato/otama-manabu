<template>
  <div>
    <header class="home header">
      <div class="picture">
          <!--<img :src="person.fields.image.fields.file.url + '?w=1200'">-->
        </div>
        <div class="foreground">
          <div class="page-bar wrapper">
            <Navigation></Navigation>
          </div>
          <div class="page-bar wrapper">
            <h1>おおたまを学ぶ</h1>
          </div>

        </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
      </div>
      <ul class="items-list wrapper">

        <li class="item" v-for="item in items">
          <category-preview :item="item"></category-preview>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import wp from '~/lib/wp'
import Navigation from '~/components/navigation.vue'
import CategoryPreview from '~/components/category-preview.vue'

export default {
  asyncData ({ params }) {
    return wp.posts()
  },
  components: {
    Navigation,
    CategoryPreview
  },
  data: function () {
    return {
      items: [
        { title: '自然', path: 'nature', imagepath: 'images/001.jpg' },
        { title: '歴史', path: 'history', imagepath: 'images/002.jpg' },
        { title: '民俗と伝統', path: 'tradition', imagepath: 'images/003.jpg' },
        { title: '文化', path: 'culture', imagepath: 'images/004.jpg' },
        { title: '産業', path: 'industry', imagepath: 'images/005.jpg' }
      ]
    }
  }
}
</script>

<style>

.home.header {
  overflow: hidden;
  position: relative;
  height: 10vw;
  min-height: 250px;
  max-height: 250px;
  background: #444;
  color: #fff;
}
.home .person-name:link,
.home .person-name:visited {
  color: #fff;
}
.home .menu a:link,
.home .menu a:visited {
  color: #fff;
}

.home .page-bar {
  border-bottom: 1px solid #4e4b5f;
}

.home .page-info {
  padding-top: 5%;
}

.home .page-info h2 {
  font-size: 1.5em;
}

.picture {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
  width: 2000%;
}

@media all and (min-width: 1200px) {
  .picture {
    left: 10%;
    width: 100%;
  }
}

.foreground {
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.foreground p {
  margin-bottom: 1em;
}

@media all and (min-width: 600px) {
  .foreground p {
    max-width: 250px;
  }
}

.social-icons {
  margin: 0;
  padding: 0;
}

.social-icons li {
  display: inline-block;
  margin-right: 1em;
}

.social-icons a {
  display: block;
}

.social-icons svg {
  display: block;
  max-width: 100%;
  fill: #fff;
  width: 1.5em;
  height: 1.5em;
}

.social-icons svg:hover {
  fill: #2199e8;
}

.thumbnail {
  margin-bottom: 0.5em;
}

.page-bar {
  text-align: center;
}
</style>

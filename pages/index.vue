<template>
  <div>
    <header class="home header">
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
      <ul class="items-list wrapper">
        <li class="item" v-for="item in items" :key="item">
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

<style scoped>
@font-face {
  font-family: "Avenir";
  font-weight: 400;
  font-style: normal;
  src: url("~/static/avenir-400.woff2") format("woff2");
  font-display: swap;
}

body {
  background: #E1E7EA;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
  font-size: 24px;
  line-height: 1;
  color: #373F49;
}

.wrapper {
  padding: 0em 0;
  max-width: 100%;
  margin: 0 auto;
}

.header {
  background: #F7F9FA;
}

.page-bar {
  max-width: 100%;
  padding: 0.1em 3%;
}

.blog.header h2,
.tag-page.header h2 {
  text-align: center;
  padding: 2.5em 0;
  color: #A0A0A0;
}

img {
  display: block;
  width: 100%;
}

h1 {
  font-size: 3em;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.5em;
  text-align: center;
}

h4 {
  text-align: center;
}

/* Copy section */
.body-container {
  background: #ffffff;
}

.items-list {
  overflow: hidden;
}

.item {
  padding: 0.1em 0.1em 0.1em 0.1em;
}

/*アイテムを画面の大きさごとに並びルールを設定する*/
@media all and (min-width: 600px) {
  .item {
    float: left;
    width: 50%;
  }
}

@media all and (min-width: 900px) {
  .item {
    width: 33.333%;
    float: left;

  }
}

/* Shared */

.tiny {
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  color: #A0A0A0;
}
*[class*="-bar"] {
  border-bottom: 1px solid #EBEBEB;
}

.home.header {
  overflow: hidden;
  position: relative;
  height: 10vw;
  min-height: 250px;
  max-height: 250px;
  background: #444;
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

.home .page-bar h1 {
  text-align: center;
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

@media all and (min-width: 1180px) {
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
    max-width: 200px;
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
  margin-bottom: 0.1em;
}

.items-list {
  overflow: visible;
}

.item {
  padding: 0.1em 0.1em 0.1em 0.1em;
}

/*アイテムを画面の大きさごとに並びルールを設定する*/
@media all and (min-width: 600px) {
  .item {
    float: left;
    width: 50%;
  }
}

@media all and (min-width: 900px) {
  .item {
    width: 33.333%;
    float: left;
  }
}

.navigation {
  overflow: vidible;
  position: relative;
  height: 5vw;
  min-height: 250px;
  max-height: 250px;
  background: #444;
  color: #fff;
}
</style>

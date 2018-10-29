<template>
  <article class="article">
    <nuxt-link :to=" item.path " class="title">
    <img class="thumbnail"
      :src=" item.imagepath + '?fit=scale&w=350&h=196'"
      :srcset="`${item.imagepath}?w=350&h=196&fit=fill 350w, ${item.imagepath}?w=1000&h=562&fit=fill 1000w, ${item.imagepath}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw">
    </nuxt-link>
    <h4><nuxt-link :to=" item.path " class="title" append >{{ item.title }}</nuxt-link></h4>
  </article>
</template>

<script>
export default {
  props: ['item']
}
</script>

<scoped css>
  .item {
    width: 50%;
  }
</scoped>
<style>

  .article{
    margin-bottom: 0.2em;
  }
  .thumbnail {
    margin-bottom: 0.2em;

  }

  .date {
  }

  .title {
    text-decoration: none;
    font-size: 30px;
    color: #373F49;
  }

  .tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }

  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: .33333rem .5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }

  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }
</style>

<template>
  <article>
    <h2>{{ post.title.rendered }}</h2>
      <div class="title" v-html="post.content.rendered"></div>
  </article>
</template>

<script>
export default {
  props: {
    post: { type: Object }
  }
}
</script>

<style>
  .thumbnail {
    margin-bottom: 1em;

  }

  .date {
  }

  .title {
    text-decoration: none;
    font-size: 22px;
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

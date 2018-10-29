<template>
  <div class="container">
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style>
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

</style>

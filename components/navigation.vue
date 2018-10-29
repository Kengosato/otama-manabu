<template>
  <nav role="navigation" class="top-nav">
    <ul class="menu">
      <!--<div class="columns is-multiline">
      <li v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
        <div class="button is-info is-1">
        <nuxt-link :to="{ name: route.name }">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
        </div>
      </li>
    </div>-->
    <li v-for="(menu, index) in menus" :key=index>
    <router-link v-bind:to=menu.path>
        <div class="button">
         {{ menu.title }}
      </div>
    </router-link>
  </li>

    </ul>
  </nav>
</template>


<script>
export default {
  data: function () {
    return {
      menus: [
        { title: 'はじめに', path: '/' },
        { title: '自然', path: 'nature' },
        { title: '歴史', path: 'history' },
        { title: '民俗と伝統', path: 'tradition' },
        { title: '文化', path: 'culture' },
        { title: '産業', path: 'industry' }
      ]
    }
  }
}
</script>
<style>
.person-name:link,
.person-name:visited {
  width: 50%;
  display: inline-block;
  font-size: 3em;
  text-decoration: none;
  color: #373F49;
}

  .top-nav {
    width: 100%;
    display: inline-block;
    text-align: center;
  }

  .menu {
    display: inline-block;
  }

  .menu li {
    display: inline-block;
    margin-left: 0.1em;
    margin-bottom: 0.1em;
  }

  .menu a:link,
  .menu a:visited {
    color: #373F49;
    text-decoration: none;
  }

</style>

<template>
  <div id="app">

    <hc-nav></hc-nav>

    <main class="container">
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
import HcNav from '@/components/HcNav'

export default {
  name: 'app',
  components: {
    'hc-nav': HcNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

<template>
  <nav id="hc-nav" class="navbar navbar-default">
    <div class="container-fluid">

      <!-- Brand and toggle get grouped for better mobile display -->
      <section class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- <a class="navbar-brand" href="#">Brand</a> -->
        <a class="navbar-brand" href="./">
          <img :alt="$store.state.site_title" :src="$store.state.nav.logo_src">
        </a>
      </section>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <section class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <form class="navbar-form navbar-right">
          <div class="form-group">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Search</button>
              </span>
            </div>
          </div>
        </form>

        <ul class="nav navbar-nav navbar-right">

          <!-- <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li> -->

          <li v-for="item in $store.state.nav.nav_items" v-if="item['Show in Menu']" class="dropdown">

            <a v-if="item.HasChildren" :href="`${$store.state.base_url}/${item.ItemUrl}`" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              {{ item.DisplayName }}
              <span class="caret"></span>
            </a>
            <a v-else :href="`${$store.state.base_url}/${item.ItemUrl}`">
              {{ item.DisplayName }}
            </a>

            <ul v-if="item.HasChildren" class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>

        </ul>

      </section><!-- /.navbar-collapse -->

    </div>
  </nav>
</template>

<script>
export default {
  name: 'hc-nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$store.dispatch('fetchNavItems')
  }
}
</script>

<style scoped>
.navbar-brand img {
  height: 40px;
  width: auto;
  margin-top: -10px;
}
</style>

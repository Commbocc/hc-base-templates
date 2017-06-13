<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <pre>{{ $store.state }}</pre>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

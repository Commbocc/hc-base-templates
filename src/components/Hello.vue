<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <details open>
      <pre>{{ $store.state }}</pre>
    </details>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'App State:'
    }
  }
}
</script>

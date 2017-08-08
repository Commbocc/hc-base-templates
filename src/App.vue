<template>
	<div id="app">

		<main>
			<router-view></router-view>
		</main>

	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
@import "./assets/style/buttons";
@import "./assets/style/navs";

body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>

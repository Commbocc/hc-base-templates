<template lang="html">
	<nav id="hc-navbar" class="navbar navbar-default">

		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#hc-navbar-collapse" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="./">
					<img src="http://hcflgov.net/library/hillsborough/system/logos/hc-logo-horizontal-rgb.png" alt="Hillsborough County, Florida">
				</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="hc-navbar-collapse">

				<!-- mobile search form -->
				<form class="navbar-form visible-xs-block">
					<div class="input-group">
						<input v-model="$store.state.navigation.searchStr" class="form-control" placeholder="Search...">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">
								<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
								<span class="sr-only">Search</span>
							</button>
						</span>
					</div>
				</form>

				<!--  -->
				<ul class="nav navbar-nav navbar-right">
					<!-- mobile -->
					<li v-for="(navItem, index) in navItems" class="dropdown visible-xs-block">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							{{ navItem.name }}
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">Action {{ index }}</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li><a href="#">Separated link</a></li>
							<li><a href="#">One more separated link</a></li>
						</ul>
					</li>

					<!-- desktop -->
					<li v-for="(navItem, index) in navItems" :key="index" class="dropdown hc-dropdown hidden-xs">
						<a :href="`/${navItem.id}`" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<span v-if="navItem.text" v-html="navItem.text"></span>
							<span v-else v-text="navItem.name"></span>
						</a>
						<dropdown v-if="navItem" :nav-item="navItem" class="hc-dropdown-menu"></dropdown>
					</li>

					<!-- desktop search -->
					<li class="dropdown hc-dropdown hidden-xs">
						<a href="/search" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							<span class="sr-only">Search</span>
						</a>
						<dropdown v-if="navItems[0]" :nav-item="navItems[0]" class="hc-dropdown-menu"></dropdown>
					</li>
				</ul>

			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->

		<!-- dropdowns -->
		<slot></slot>

	</nav>
</template>

<script>
import { mapState } from 'vuex'
import Dropdown from '@/components/Navigation/Dropdowns/Default'

export default {
	components: {
		Dropdown
	},
	computed: {
		...mapState({
			navItems: state => state.navigation.index,
		})
	}
}
</script>

<style lang="scss">
@import "../../assets/style/Navigation";
</style>

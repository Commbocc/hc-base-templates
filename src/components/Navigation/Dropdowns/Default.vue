<template lang="html">
	<section>
		<h3 class="text-info">
			{{ navItem.name }}
		</h3>

		<div class="row">
			<div class="col-sm-12 col-md-7">
				<ul class="nav nav-pills nav-stacked small">
					<li v-for="n in 9">
						<a href="#">
							{{ navItem.name }} item {{ n }}
						</a>
					</li>
				</ul>
			</div>
			<div class="col-sm-12 col-md-5">
				<!-- <hr class="visible-sm-block"> -->
				<div class="row">
					<div class="col-sm-7 col-sm-offset-1 col-md-7 col-md-offset-0">
						<h4 class="text-primary">
							Lorem {{ navItem.name }}
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
						</p>
						<p>
							<a href="#" class="btn btn-sm btn-primary">Button</a>
						</p>
					</div>
					<div class="col-sm-3 col-md-5">
						<img src="http://hcflgov.net/library/hillsborough/system/logos/atyourservicelogo.png" alt="" class="img-responsive">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['navItem']
}
</script>

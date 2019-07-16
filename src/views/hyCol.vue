<template>
	<div>
		<hy-row :justify="end">
			<hy-col :sm="2" :lg="1" :offset="3">1</hy-col>
			<hy-col :sm="3" :lg="4" :offset="3">2</hy-col>
			<hy-col :sm="2" :lg="1" :offset="3">3</hy-col>

			<hy-col :sm="3" :lg="4" :offset="3">4</hy-col>
		</hy-row>
	</div>
</template>

<script>
	import hyCol from './../components/hy-col/index.vue'
	import hyRow from './../components/hy-row/index.vue'
	export default {
		data() {
			return {
				end: 'end',
			}
		},

		components: {
			hyCol,
			hyRow,
		},
	}
</script>

<style>
</style>

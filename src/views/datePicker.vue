<template>
	<div>
		<hy-datePicker v-model="newDate">
		</hy-datePicker>
		<h1>{{newDate}}</h1>
	</div>
</template>

<script>
	import hyDatePicker from './../components/hy-datePicker/index.vue'
	export default {
		data() {
			return {
				newDate:'2020-04-11'
			}
		},
		mounted() {},
		methods: {},
		watch: {},
		computed: {},
		components: {
			hyDatePicker
		},
		updated() {},
		created() {},
		
	}
</script>

<style>
</style>

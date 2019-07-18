<template>
	<div>
		<hyCheckboxGroup>
			<hy-checkbox></hy-checkbox>
			<hy-checkbox></hy-checkbox>
			<hy-checkbox></hy-checkbox>
			<hy-checkbox></hy-checkbox>
			<hy-checkbox></hy-checkbox>
			<hy-checkbox></hy-checkbox>
			<hy-checkbox></hy-checkbox>
		</hyCheckboxGroup>
		<hy-check ></hy-check>
	</div>
</template>
<script>
	import hyCheckbox from './../components/hy-checkboxss/index.vue'
	import hyCheck from './../components/hy-checkss/index.vue'
	import hyCheckboxGroup from './../components/hy-checkbox-groupss/index.vue'
	export default {
		data() {
			return {};
		},
		mounted() {

		},
		methods: {

		},
		computed: {},
		watch: {},
		components: {
			hyCheckbox,
			hyCheck,
			hyCheckboxGroup
		},
		updated() {},
		created() {}
	};
</script>
<style>

</style>

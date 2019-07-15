<template>
	<div :class="['hy-row',
	              type=='flex'?'hy-row-type':'',
								justify!=null?'hy-row-'+justify:'',
								align!=null?'hy-row-'+align:'',
								]">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'hy-row',
		props: {
			type: String,
			justify: String,
			align: String
		},
		data() {
			return {};
		},
		mounted() {

		},
		methods: {

		},
		watch: {},
		components: {},
		computed: {},
		updated() {},
		created() {}
	};
</script>
<style>
@import url("../../css/col.css");



</style>

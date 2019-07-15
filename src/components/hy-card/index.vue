<template>
	<div class="hy-card">
		<div class="hy-card-head">
			<slot name="head"></slot>
		</div>
		<div class="hy-card-content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hy-card',
		props: {},
		data() {
			return {};
		},
		mounted() {

		},
		methods: {

		},
		computed: {},
		watch: {},
		components: {},
		updated() {},
		created() {}
	};
</script>
<style>
	@import url("../../css/col.css");

	.hy-card {
		border-radius: 4px;
		border: 1px solid #ebeef5;
		background-color: #fff;
		overflow: hidden;
		color: #303133;
		transition: .3s;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		width: 500px;
	}

	.hy-card-head {
		padding: 15px 15px;
		border-bottom: 1px solid #ebeef5;
		box-sizing: border-box;
	}

	.hy-card-content {
		padding: 15px;
	}
</style>

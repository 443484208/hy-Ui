<template>
	<div>
		<hy-mask v-model="maskShow">
			<div>54444444444444555</div>
		</hy-mask>
		<button @click="show">点击显示</button>
	</div>
</template>
<script>
	import hyMask from './../components/hy-mask/index.vue'
	export default {
		data() {
			return {
				maskShow: false
			};
		},
		mounted() {

		},
		methods: {
			show() {
				this.maskShow = true;
			}
		},
		watch: {},
		components: {
			hyMask
		},
		computed: {},
		updated() {},
		created() {}
	};
</script>
<style>

</style>

<template>
	<div>
		<hy-input tyspe="textarea" autofocus="true" resize="none" placeholder="666666" maxlength="20" v-model="maskShow"
		 @input="s" @blur="ss" @focus="sss" iconFrist="phone" iconEnd="tips">
		 
		 
		 
			<i slot="frist">123</i>
			<i slot="frist">123</i>
			<i slot="frist">123</i>
			<i slot="frist">123</i>
			<i slot="frist">123</i>
			<i slot="end">123</i>
			<i slot="end">123</i>
			<i slot="end">123</i>
			<i slot="end">123</i>
			<i slot="end">123</i>
		</hy-input>

	</div>
</template>
<script>
	import hyInput from './../components/hy-input/index.vue'
	export default {
		data() {
			return {
				maskShow: 1236,
				slot: '666'
			};
		},
		mounted() {
		},
		methods: {
			s(event) {
				console.log('change:' + event)
			},
			ss(event) {
				console.log('blur:' + event)
			},
			sss(event) {
				console.log('@focus:' + event)
			}
		},
		computed: {},
		watch: {

		},
		components: {
			hyInput
		},
		computed: {},
		updated() {},
		created() {}
	};
</script>
<style>

</style>

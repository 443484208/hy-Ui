<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/images/logo.png">
		<hy-row :justify="end">
			<hy-col :sm="2" :lg="1" :offset="3">1</hy-col>
			<hy-col :sm="3" :lg="4" :offset="3">2</hy-col>
			<hy-col :sm="2" :lg="1" :offset="3">3</hy-col>

			<hy-col :sm="3" :lg="4" :offset="3">4</hy-col>
		</hy-row>
		<hy-switch class="ss" width='110' height="75" defaultPrevent="true" v-model="sthGiveChild"></hy-switch>
		<h1>{{sthGiveChild}}</h1>
		<div @click="ss">121</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import hyCol from './../components/hy-col/index.vue'
	import hyRow from './../components/hy-row/index.vue'
	import hySwitch from './../components/hy-switch/index.vue'
	export default {
		name: 'home',
		data() {
			return {
				end: 'end',
				sthGiveChild: 0
			};
		},
		methods: {
			ss(event) {
				console.log(event.target.style.background = 'red')
			}
		},
		components: {
			hyCol,
			hyRow,
			hySwitch
		},
		created() {}
	}
</script>
<style>

</style>

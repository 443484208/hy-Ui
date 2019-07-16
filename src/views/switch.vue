<template>
	<div>
		<hy-switch class="ss" width='110' height="75" defaultPrevent="true" v-model="sthGiveChild"></hy-switch>
		<h1>{{sthGiveChild}}</h1>
	</div>
</template>

<script>
	import hySwitch from './../components/hy-switch/index.vue'
	export default {
		name: 'switch',
		data() {
			return {
				sthGiveChild: 0,

			}
		},
		components: {
			hySwitch
		},
	}
</script>

<style>
</style>

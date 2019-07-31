<template>
	<div>
		<hy-switch class="ss"  defaultPrevent="true" v-model="sthGiveChild"></hy-switch>
		<h1>{{sthGiveChild}}</h1>
	</div>
</template>

<script>
	import hySwitch from './../components/hy-switch/index.vue'
	export default {
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

<template>
	<div class="home">
		<div @click="link(item.path)" v-for="(item,i) in routerArry" v-if="routerArry!=null" :key="i">
			<div>名称:{{item.name}}>地址:{{item.path}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				routerArry: [],
			};
		},
		methods: {
			ss(event) {
				console.log(event.target.style.background = 'red')
			},
			link(url) {
				this.$router.push({
					path: url,
				})
			}
		},
		created() {
			this.routerArry = this.$router.options.routes;
		}
	}
</script>
<style>

</style>

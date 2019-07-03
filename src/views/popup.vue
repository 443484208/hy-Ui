<template>
	<div>
		<hy-popup v-model='popupShow' :disabled='disabled' :popupWidth="popupWidth" :direction='direction'>
			<button @click="clost()">点击关闭</button>
			<button @click="clost()">点击关闭</button>
			<button @click="clost()">点击关闭</button>
			<button @click="clost()">点击关闭</button>
			<button @click="clost()">点击关闭</button>
			<button @click="clost()">点击关闭</button>
		</hy-popup>
		<div @click="show()">点击开启</div>
	</div>
</template>
<script>
	import hyPopup from './../components/hy-popup/index.vue'
export default {
	data() {
		return {
			popupShow:false,
			direction:'left',
			disabled:false,
			popupWidth:500
		};
	},
	mounted() {
		
	},
	methods: {
		show(){
			this.popupShow=true;
			},
			clost(){
				this.popupShow=false;
			}
	},
  computed: {
  },
	watch: {
	},
	components: {
		hyPopup
	},
	computed: {
	},
  updated (){},
  created() {}
};
</script>
<style>
	
</style>


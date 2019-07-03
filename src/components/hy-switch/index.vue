<template>
	<div>
		<span class="hy-switch" :style="switchStyle" :class="[switchType==true?'hy-switch-atvice':'']" @click="hySwitch()"></span>
	</div>
</template>
<script>
	export default {
		name:'hy-switch',
		props: {
			give: Number,
			background: String,
		},
		model: {
			prop: 'give',
			event: 'returnBack'
		},
		data() {
			return {
				switchType: false,
				switchStyle: {}
			};
		},
		mounted() {
		},
		methods: {
			hySwitch() {
				if (this.switchType == 0) {
					this.switchStyle = {
						background: this.background ? this.background : 'rgb(19, 206, 102)',
						borderColor: this.background ? this.background : 'rgb(19, 206, 102)',
					}
					this.switchType = 1;
				} else {
					this.switchType = 0;
					this.switchStyle = {};
				}
				
				this.$emit('returnBack', this.switchType);
			}
		},
		computed: {},
		watch: {},
		components: {},
		updated() {},
		created() {
		}
	};
</script>
<style>
	@import url("../../css/col.css");

	.hy-switch {
		margin: 0;
		display: inline-block;
		position: relative;
		width: 40px;
		height: 20px;
		border: 1px solid #dcdfe6;
		outline: none;
		border-radius: 10px;
		box-sizing: border-box;
		background: #dcdfe6;
		cursor: pointer;
		transition: border-color .3s, background-color .3s;
		vertical-align: middle;
		cursor: default;
	}

	.hy-switch:after {
		content: "";
		position: absolute;
		top: 1px;
		left: 1px;
		border-radius: 100%;
		transition: all .3s;
		width: 16px;
		height: 16px;
		background-color: #fff;
	}

	.hy-switch-atvice:after {
		left: 100%;
		margin-left: -17px;
	}
</style>

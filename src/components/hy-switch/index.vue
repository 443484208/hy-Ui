<template>
	<span class="hy-switch" :style="switchStyle" :class="[switchType==true?'hy-switch-atvice':'']" @click="hySwitch()">

	</span>
</template>
<script>
	let switchSpan = function(t, s) {
		s = document.createElement('style');
		s.innerText = t;
		document.body.appendChild(s);
	};
	export default {
		name: 'hy-switch',
		props: {
			give: Number,
			activeColor: String,
			closeColor: String,
			height: [String, Number],
			width: [String, Number],
			defaultPrevent: [Boolean, String],
		},
		model: {
			prop: 'give',
			event: 'returnBack'
		},
		data() {
			return {
				switchType: false,
				switchStyle: {},
				switchDefault: {
					height: 20,
					width: 40
				}
			};
		},
		mounted() {
			if (this.defaultPrevent == 'true') {
				this.switchDefault.height = this.height || 20;
				this.switchDefault.width = this.width || 40;
				this.switchStyle = {
					height: this.switchDefault.height + 'px',
					width: this.switchDefault.width + 'px'
				}
				let height = this.switchDefault.height - 4;
				switchSpan('.hy-switch:after{width:' + height + 'px;height:' + height + 'px}');
			} else {
				if (this.height != undefined && this.width != undefined) {
					if (this.height * 200 <= this.width * 100) {
						this.switchDefault.height = this.height || 20;
						this.switchDefault.width = this.width || 40;
					} else {
						this.switchDefault.height = this.height;
						this.switchDefault.width = this.height * 2;
					}
				} else if (this.width != undefined) {
					this.switchDefault.height = this.width / 2;
					this.switchDefault.width = this.width;
				} else if (this.height != undefined) {
					this.switchDefault.height = this.height;
					this.switchDefault.width = this.height * 2;
				}
				this.switchStyle = {
					height: this.switchDefault.height + 'px',
					width: this.switchDefault.width + 'px'
				}
				var height = this.switchDefault.height - 4;
				switchSpan('.hy-switch:after{width:' + height + 'px;height:' + height + 'px}');
			}
		},
		methods: {
			hySwitch() {
				if (this.switchType == 0) {
					this.switchStyle = {
						background: this.activeColor ? this.activeColor : 'rgb(19, 206, 102)',
						borderColor: this.activeColor ? this.activeColor : 'rgb(19, 206, 102)',
						height: this.switchDefault.height + 'px',
						width: this.switchDefault.width + 'px',
					}
					this.switchType = 1;
					var height = this.switchDefault.height - 3;
					switchSpan('.hy-switch-atvice:after{left:100%;margin-left:-' + height + 'px}');
				} else {
					this.switchType = 0;
					this.switchStyle = {
						height: this.switchDefault.height + 'px',
						width: this.switchDefault.width + 'px',
						background: this.closeColor ? this.closeColor : '#dcdfe6',
						borderColor: this.closeColor ? this.closeColor : '#dcdfe6',
					};
				}
				this.$emit('returnBack', this.switchType);
			}
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

	.hy-switch {
		margin: 0;
		display: inline-block;
		position: relative;
		border: 1px solid #dcdfe6;
		outline: none;
		border-radius: 30px;
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
		background-color: #fff;
	}

	.hy-switch-atvice:after {
		left: 100%;
		margin-left: -17px;
	}
</style>

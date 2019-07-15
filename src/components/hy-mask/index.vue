<template>
	<div class="hy-mask" :style="maskStyle" v-if="maskShows" @click="close()">
		<div class="hy-mask-slot" :style="contentStyle" @click="ss($event)">
		<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hy-mask',
		props: {
			maskWidth: Number,
			maskHeight: Number,
			maskShow: Boolean,
			disabled: Boolean,

		},
		model: {
			prop: 'maskShow',
			event: 'returnBack'
		},
		data() {
			return {
				maskShows: null,
				maskStyle: {
					height: '600px',
					width: '100%'
				},
				contentStyle: {},
			};
		},
		mounted() {
			this.obtain();
		},
		methods: {
			obtain() {
				if (this.maskShows == true) {
					this.maskBlock();
				} else {
					this.maskStyle = {
						opacity: 0,
					}
				}
			},
			ss(event) {
				if (this.disabled == 'cancel') {} else {
					event.cancelBubble = true;
				}
			},
			close() {
				if (this.disabled == true) {} else {
					this.maskStyle = {
						opacity: 0,
					}
					this.maskClose();
				}
			},
			maskClose() {
				var that = this;
				setTimeout(() => {
					that.$emit('returnBack', false);
					that.maskShows = false;
				}, 300)
			},
			maskBlock() {
				var width = this.maskWidth || (window.screen.width * 0.9);
				var height = this.maskHeight || (window.screen.height * 0.6);
				this.contentStyle = {
					height: height + 'px',
					width: width + 'px',
				}
				var that = this;
				setTimeout(function() {
					that.maskShows = true;
					that.maskStyle = {
						opacity: 1,
					}
				}, 100)
			}
		},
		watch: {
			maskShow(value) {
				var that = this;
				if (value == true) {
						that.maskBlock();
				} else {
					this.maskClose();
				}
			}
		},
		components: {},
		computed: {},
		updated() {},
		created() {
			this.maskShows = this.maskShow;

		}
	};
</script>
<style>
	@import url("../../css/col.css");

	.hy-mask {
		position: fixed;
		left: 0px;
		top: 0px;
		bottom: 0px;
		right: 0px;
		opacity: 0;
		transition: opacity .5s;
		background-color: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hy-mask-slot {
		width: 0;
		height: 0;
		background: white;
		z-index: 2;
		position: fixed;
	}
</style>

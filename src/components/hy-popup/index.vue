<template>
	<div class="hy-popup" v-show="popupShows">
		<div class="hy-popup-fiexd" @click="close()"></div>
		<div class="hy-popup-slot" :style="popupStyle">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hy-popup',
		props: {
			direction: String,
			popupWidth: Number,
			popupHeight: Number,
			popupShow: Boolean,
			disabled: Boolean
		},
		model: {
			prop: 'popupShow',
			event: 'returnBack'
		},
		data() {
			return {
				popupShows: null,
				directions: null,
				popupStyle: {
					height: '600px',
					width: '100%'
				},
			};
		},
		mounted() {},
		methods: {
			obtain() {
				console.log(this.popupShow)
				var width = this.popupWidth || (window.screen.width / 2);
				var height = this.popupHeight || (window.screen.height / 2);
				console.log(this.direction)
				this.directions = this.direction || 'top';
				if (this.directions == 'top') {
					this.popupStyle = {
						width: "100%",
						height: height + 'px',
						top: '0',
						transform: 'translateY(-' + height + 'px)',

					}
				} else if (this.directions == 'bottom') {
					this.popupStyle = {
						width: "100%",
						height: height + 'px',
						bottom: '0',
						transform: 'translateY(' + height + 'px)',

					}
				} else if (this.directions == 'left') {
					this.popupStyle = {
						width: width + 'px',
						height: '100%',
						left: '0',
						transform: 'translateX(-' + width + 'px)',

					}
				} else if (this.directions == 'right') {
					this.popupStyle = {
						width: width + "px",
						height: '100%',
						right: '0',
						transform: 'translateX(' + width + 'px)',

					}
				}
			},
			close() {
				if (this.disabled == true) {

				} else {
					this.popupClose()
				}

			},
			popupClose() {
				this.directions = this.direction || 'top';
				var that = this;
				this.obtain();
				setTimeout(() => {
					that.$emit('returnBack', false);
					that.popupShows = false;
				}, 300)
			}
		},
		computed: {},
		watch: {
			popupShow(value) {
				if (value == true) {
					this.popupShows = true;
					this.directions = this.direction || 'top';
					var width = this.popupWidth || (window.screen.width / 2);
					var height = this.popupHeight || (window.screen.height / 2);
					if (this.directions == 'top') {
						this.popupStyle = {
							width: "100%",
							height: height + 'px',
							top: '0',
							transform: 'translateY(0)',
						}
					} else if (this.directions == 'bottom') {
						this.popupStyle = {
							width: "100%",
							height: height + 'px',
							bottom: '0',
							transform: 'translateY(0)',
						}
					} else if (this.directions == 'left') {
						this.popupStyle = {
							width: width + 'px',
							height: '100%',
							transform: 'translateX(0)',
							left: '0',
						}
					} else if (this.directions == 'right') {
						this.popupStyle = {
							width: width + 'px',
							height: '100%',
							transform: 'translateX(0)',
							right: '0',
						}
					}
				} else {
					this.popupClose();
				}
			}
		},
		components: {},
		computed: {},
		updated() {},
		created() {
			this.obtain();
		}
	};
</script>
<style>
	@import url("../../css/col.css");

	.hy-popup {
		position: fixed;
		left: 0px;
		top: 0px;
		bottom: 0px;
		right: 0px;

	}

	.hy-popup-fiexd {
		height: 100%;
		width: 100%;
		position: fixed;
		left: 0px;
		top: 0px;
		bottom: 0px;
		right: 0px;
		background-color: rgba(0, 0, 0, 0.6);
		opacity: 1;
		z-index: 1;
	}

	.hy-popup-slot {
		width: 0;
		height: 0;
		position: fixed;
		background: white;
		z-index: 2;
		transition: transform .3s, width .3s;
	}
</style>

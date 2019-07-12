<template>
	<div class="hy-slider">
		<div :class="[disabled=='true'?'hy-slider-road-disabled':'hy-slider-road']" @click="ss">
			<div class="hy-slider-selection" :class="[disabled=='true'?'hy-slider-selection-disabled':'']">
			</div>

			<div class="hy-slider-drag" :class="[disabled=='true'?'hy-slider-drag-disabled':'']" id="hyDrag">
			</div>
			<div class="hy-slider-drag" :class="[disabled=='true'?'hy-slider-drag-disabled':'']" id="hyDrags">
			</div>
			<!-- 	<div class="hy-slider-tips">
					<span>55</span>
					<div class="hy-slider-arrow"></div>
				</div> -->
			<div class="hy-slider-breakpoint">
				<span v-for="(item,i) in s" :key="i">{{i>0?i+'0':i}}</span>
			</div>
			<span>
				{{sliderValue}}
			</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hy-slider',
		props: {
			step: [String, Number],
		},
		model: {
			prop: 'value',
			event: 'returnBack'
		},
		data() {
			return {
				sliderValue: null,
				disabled: '',
				s: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				dragStyle2: {},
				dragStyle1: {
				},
				jj: ['30%', '60%'],
			};
		},
		mounted() {
			this.dt();
			var drag = document.getElementById('hyDrag');
			var drags = document.getElementById('hyDrags');
			var slider = document.querySelector('.hy-slider-selection');
			var fDiv = document.querySelector('.hy-slider').offsetWidth;
			var dragLeft = fDiv * (parseInt(this.jj[0]) / 100);
			var dragsLeft = fDiv * (parseInt(this.jj[1]) / 100);
			drag.style.left = dragLeft + 'px';
			drags.style.left = dragsLeft + 'px';
			slider.style.width = (dragLeft > dragsLeft ? (dragLeft - dragsLeft) : (dragsLeft - dragLeft)) + 'px';
			slider.style.left = (dragLeft > dragsLeft ? (dragsLeft) : (dragLeft)) + 'px';
		},
		methods: {
			ss($event) {
				var drag = document.getElementById('hyDrag');
				var drags = document.getElementById('hyDrags');
				var dragLeft = Number(drag.style.left.replace("px", ""));
				var dragsLeft = Number(drags.style.left.replace("px", ""));
				var slider = document.querySelector('.hy-slider-selection');
				var sliderWidth = Number(slider.style.width.replace("px", "")) / 2;
				var difference = (dragLeft - dragsLeft) / 2;
				var fDiv = document.querySelector('.hy-slider').offsetWidth;
				if (this.disabled == 'true') {} else {
					if (dragLeft == dragsLeft && dragLeft > $event.clientX) {
						drag.style.left = $event.clientX + "px";
						slider.style.width = dragsLeft - $event.clientX + 'px';
						slider.style.left = $event.clientX + 'px';
					} else if (dragLeft == dragsLeft && dragLeft < $event.clientX) {
						drag.style.left = $event.clientX + "px";
						slider.style.width = $event.clientX - dragsLeft + 'px';
					} else if (difference < 0) {
						if ($event.clientX < dragLeft) {
							drag.style.left = $event.clientX + "px";
							slider.style.width = dragsLeft - $event.clientX + 'px';
							slider.style.left = $event.clientX + 'px';
						} else if ($event.clientX > dragsLeft) {
							drags.style.left = $event.clientX + "px";
							slider.style.width = $event.clientX - dragLeft + 'px';
							slider.style.left = dragLeft + 'px';
						} else if (($event.clientX - dragLeft) < (dragsLeft - $event.clientX)) {
							drag.style.left = $event.clientX + "px";
							slider.style.width = dragsLeft - $event.clientX + 'px';
							slider.style.left = $event.clientX + 'px';
						} else {
							drags.style.left = $event.clientX + "px";
							slider.style.width = $event.clientX - dragLeft + 'px';
							slider.style.left = dragLeft + 'px';
						}
					} else {
						if ($event.clientX < dragsLeft) {
							drags.style.left = $event.clientX + "px";
							slider.style.width = dragLeft - $event.clientX + 'px';
							slider.style.left = $event.clientX + 'px';
						} else if ($event.clientX > dragLeft) {
							drag.style.left = $event.clientX + "px";
							slider.style.width = $event.clientX - dragsLeft + 'px';
							slider.style.left = dragsLeft + 'px';
						} else if (($event.clientX - dragsLeft) < (dragLeft - $event.clientX)) {
							drags.style.left = $event.clientX + "px";
							slider.style.width = dragLeft - $event.clientX + 'px';
							slider.style.left = $event.clientX + 'px';
						} else {
							drag.style.left = $event.clientX + "px";
							slider.style.width = $event.clientX - dragsLeft + 'px';
							slider.style.left = dragsLeft + 'px';
						}
					}
					this.sliderValue = (Number(slider.style.width.replace("px", "")) / fDiv * 100).toFixed(0);
				}
			},
			//	拖动
			dt() {
				var drag = document.getElementById('hyDrag');
				var drags = document.getElementById('hyDrags');
				var fDiv = document.querySelector('.hy-slider').offsetWidth;
				var slider = document.querySelector('.hy-slider-selection');
				var that = this;
				drag.onmousedown = function(ev) {
					drag.style.position = 'absolute';
					var dragsLeft = Number(drags.style.left.replace("px", ""));
					var oEvent = ev;
					//求出鼠标和box的位置差值
					var x = oEvent.clientX - drag.offsetLeft;
					document.onmousemove = function(ev) {
						var oEvent = ev;
						var l = oEvent.clientX - x;
						if (l < 0) {
							l = 0;
						} else if (l > fDiv) {
							l = fDiv;
						} else if (l > document.documentElement.clientWidth - drag.offsetWidth) {
							l = document.documentElement.clientWidth - drag.offsetWidth;
						}
						if (that.step != undefined && l != 0) {
							var a = that.step / 100;
							var step = ((sliderValue / a).toFixed(0)) * a;
							l = l == fDiv ? fDiv : fDiv * step;
						}
						if (that.disabled == 'true') {} else {
							if (dragsLeft < l) {
								slider.style.width = l - dragsLeft + 'px';
								slider.style.left = dragsLeft + 'px';

							} else if (dragsLeft > l) {
								slider.style.width = dragsLeft - l + 'px';
								slider.style.left = l + 'px';

							} else {
								slider.style.width = l + 'px';
							}
							drag.style.left = l + "px";
						}
						that.sliderValue = (Number(slider.style.width.replace("px", "")) / fDiv * 100).toFixed(0);
					}
					//鼠标抬起的函数
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					}

					return false;
				}
				drags.onmousedown = function(ev) {
					drags.style.position = 'absolute';
					var dragsLeft = Number(drag.style.left.replace("px", ""));
					var oEvent = ev;
					//求出鼠标和box的位置差值
					var x = oEvent.clientX - drags.offsetLeft;
					document.onmousemove = function(ev) {
						that.preventDefault = true;
						var oEvent = ev;
						var l = oEvent.clientX - x;
						if (l < 0) {
							l = 0;
						} else if (l > fDiv) {
							l = fDiv;
						} else if (l > document.documentElement.clientWidth - drags.offsetWidth) {
							l = document.documentElement.clientWidth - drags.offsetWidth;
						}
						if (that.step != undefined && l != 0) {
							var a = that.step / 100;
							var step = ((sliderValue / a).toFixed(0)) * a;
							l = l == fDiv ? fDiv : fDiv * step;

						}
						if (that.disabled == 'true') {

						} else {
							if (dragsLeft < l) {
								slider.style.width = l - dragsLeft + 'px';
								slider.style.left = dragsLeft + 'px';

							} else if (dragsLeft > l) {
								slider.style.width = dragsLeft - l + 'px';
								slider.style.left = l + 'px';

							} else {
								slider.style.width = l + 'px';
							}

							drags.style.left = l + "px";
						}
						that.sliderValue = (Number(slider.style.width.replace("px", "")) / fDiv * 100).toFixed(0);
					}

					//鼠标抬起的函数
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					}
					return false;
				}
			}
		},
		computed: {},
		watch: {},
		components: {},
		computed: {},
		updated() {},
		created() {}
	};
</script>
<style>
	@import url("../../css/col.css");

	.hy-slider-road {
		width: 100%;
		height: 6px;
		margin: 16px 0;
		background-color: #E4E7ED;
		border-radius: 3px;
		position: relative;
		cursor: pointer;
		vertical-align: middle;
	}

	.hy-slider {
		width: 70%;
	}

	.hy-slider-selection {
		height: 6px;
		background-color: #409EFF;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		position: absolute;
	}

	.hy-slider-selection-disabled {
		background: #656c7c !important;
	}

	.hy-slider-drag {
		transform: translateX(-50%);
		height: 18px;
		width: 18px;
		position: absolute;
		z-index: 1001;
		top: -7px;
		background-color: transparent;
		text-align: center;
		user-select: none;
		line-height: normal;
		border: #409EFF solid 2px;
		background-color: #fff;
		border-radius: 50%;
		user-select: none;
	}

	.hy-slider-drag-disabled {
		border: #C0C4CC solid 2px !important;
	}

	.hy-slider-tips {
		background: #303133;
		color: #fff;
		position: absolute;
		border-radius: 4px;
		padding: 10px;
		z-index: 2000;
		font-size: 12px;
		line-height: 1.2;
		min-width: 10px;
		word-wrap: break-word;
	}


	.hy-slider-arrow {
		bottom: -6px;
		border-top-color: #303133;
		border-bottom-width: 0;
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
		border-width: 6px;
		left: 10px;
	}

	.hy-slider-arrow:after {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
		content: " ";
		border-width: 6px;
		margin-left: -6px;
		border-top-color: #303133;
	}

	.hy-slider-road-disabled {
		width: 100%;
		height: 6px;
		margin: 16px 0;
		background-color: #E4E7ED;
		border-radius: 3px;
		position: relative;
		vertical-align: middle;
		cursor: not-allowed;
	}

	.hy-slider-breakpoint {
		display: flex;

	}

	.hy-slider-breakpoint span {
		width: 10%;
		display: block;
		text-align: left;
	}
</style>

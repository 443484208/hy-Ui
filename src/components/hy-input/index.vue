<template>
	<div class="hy_input" style="position:relative;" :class="[edit==''?'':'hy-edit-input']">
		<textarea :placeholder="placeholder" ref="myInput" :style="{		 resize:(resize)}" autosize="true" :maxlength="maxlength"
		 v-if="type=='textarea'" class="hy-textarea" v-model='values' @input="hyInput" @change="hyChange" @blur="hyBlur"
		 @focus="hyFocus" cols="30" rows="10"></textarea>
		<input :style="styleInput" :placeholder="placeholder" ref="myInput" v-if="disabled=='true'&&type!='textarea'" :class="[disabled=='true'?'hy-input-disabled':'']"
		 :maxlength="maxlength" :disabled="disabled" class="hy-input" :type="type" v-model='values' @input="hyInput" @change="hyChange"
		 @blur="hyBlur" @focus="hyFocus">
		<input :style="styleInput" :placeholder="placeholder" ref="myInput" v-if="disabled!='true'&&type!='textarea'"
		 :maxlength="maxlength" class="hy-input" :type="type" v-model='values' @input="hyInput" @change="hyChange" @blur="hyBlur"
		 @focus="hyFocus">
		<span>
			<span class="iconfont-input-frist iconfont-input " :style="styleFrist" v-if="(iconFrist!=null&&type!='textarea')||slotFrist=='true'">
				<span class="iconfont" v-if="iconFrist!=null" :class="[iconFrist!=null?'icon'+iconFrist:'']"></span>
				<slot name="frist">
				</slot>
			</span>
			<span class="iconfont-input-end iconfont-input" :style="styleEnd" v-if="(iconEnd!=null&&type!='textarea')||slotEnd=='true'">
				<span class="iconfont" v-if="iconEnd!=null" :class="[iconEnd!=null?'icon'+iconEnd:'']"></span>
				<slot name="end">
				</slot>
			</span>
		</span>
	</div>
</template>
<script>
	export default {
		name: 'hy-input',
		props: {
			value: [String, Number],
			type: String,
			maxlength: [String, Number],
			disabled: [Boolean, String],
			resize: String,
			placeholder: String,
			autofocus: String,
			edit: String,
			iconEnd: String,
			iconFrist: String,
		},
		data() {
			return {
				values: null,
				styleEnd: {
					right: '5px'
				},
				styleFrist: {
					left: '5px'
				},
				styleInput: {},
				slotFrist: false,
				slotEnd: false,
			};
		},
		model: {
			prop: 'value',
			event: 'returnBack'
		},
		mounted() {
			if (this.iconFrist != undefined && this.iconEnd != undefined) {} else if (this.iconFrist != undefined && this.iconEnd ==
				undefined) {
				this.styleInput = {
					paddingLeft: '30px'
				}
			} else if (this.iconFrist == undefined && this.iconEnd != undefined) {
				this.styleInput = {
					paddingRight: '30px'
				}
			}
			this.values = this.value || '';
			if (this.autofocus && this.$refs.myInput) {
				var that = this;
				setTimeout(() => {
					that.$refs.myInput.focus();
				}, 300)
			}
			if (this.$slots) {
				for (const a in this.$slots) {
					if (a == 'frist') {
						var frist = document.querySelectorAll('.hy_input .iconfont-input-frist')[0].offsetWidth + 10;
						this.styleInput.paddingLeft = frist + 'px';
					} else if (a == 'end') {
						var end = document.querySelectorAll('.hy_input .iconfont-input-end')[0].offsetWidth + 10;
						this.styleInput.paddingRight = end + 'px';
					}
				}
			}
		},
		methods: {
			hyChange(event) {
				this.$emit('returnBack', event.target.value);
				this.$emit('change', event.target.value);
			},
			hyInput(event) {
				this.$emit('returnBack', event.target.value);
				this.$emit('input', event.target.value);
			},
			hyBlur(event) {
				this.$emit('returnBack', event.target.value);
				this.$emit('blur', event.target.value);
			},
			hyFocus(event) {
				this.$emit('returnBack', event.target.value);
				this.$emit('focus', event.target.value);
			},
			hyClear() {
				this.$emit('input', '');
				this.$emit('change', '');
				this.$emit('clear');
			}
		},
		computed: {},
		watch: {
			value(value) {
				this.values = value;
			}
		},
		components: {},
		computed: {},
		updated() {},
		created() {}
	};
</script>
<style>
	@import url("../../css/col.css");
	@import url("../../font_hy/iconfont.css");

	.hy-input:focus,
	.hy-textarea:focus {
		outline: none;
		border-color: #409eff;
	}

	.hy-edit-input {
		height: 40px;
		line-height: 40px;
	}

	.hy-input {
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		box-sizing: border-box;
		display: inline-block;
		height: inherit;
		line-height: inherit;
		outline: none;
		font-size: inherit;
		color: inherit;
		padding: 0 10px;
		width: 100%;
		transition: border-color .2s;
	}

	.hy-textarea {
		display: block;
		padding: 5px 10px;
		line-height: 1.5;
		box-sizing: border-box;
		width: 100%;
		height: inherit;
		font-size: inherit;
		color: inherit;
		background-color: #fff;
		background-image: none;
		border: 1px solid #dcdfe6;
		border-radius: 4px;
		transition: border-color .2s;
	}

	.hy-input-disabled {
		background-color: #F5F7FA;
		border-color: #E4E7ED;
		color: #C0C4CC;
		cursor: not-allowed;
	}

	.iconfont-input {
		position: absolute;
		top: 0;
		align-items: center;
		min-width: 25px;
		text-align: center;
		pointer-events: none;
	}
</style>

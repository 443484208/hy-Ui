<template>
	<div @click="ss()">
		<span :class="[a==true?'b':'checkbox-button']">
		</span>
		<span :class="[a==true?'checkbox-text':'']">
			Checkbox
		</span>
	</div>
</template>
<script>
	export default {
		name: 'hy-checkbox',
		props: {},
		data() {
			return {
				a: false,
			};
		},
		mounted() {

		},
		methods: {
			ss() {
				this.a = !this.a;
				var ii;
				var a;
				var all;
				this.$refs['.hyCheckboxGroup']
				for (var j = 0; j < this.$parent.$parent.$children.length; j++) {
					if (document.querySelector('.hyCheck') == this.$parent.$parent.$children[j].$el) {
						this.$parent.$parent.$children[j].$el.__vue__.$data.a = this.a;
						this.$parent.$parent.$children[j].$el.__vue__.$data.b = 'c';
						ii=j;
					}
					if(this.$parent.$parent.$children[j].$el==document.querySelector('.hyCheckboxGroup')){
						var ai=0;
						for(var i=0;i<this.$parent.$parent.$children[j].$el.children.length;i++){
							if(this.$parent.$parent.$children[j].$el.children[i].__vue__.$data.a==true){
								ai=ai+1;
								a=true;
								all=ai==this.$parent.$parent.$children[j].$el.children.length?'b':'c';
							}
						}
					}
				}
				if(ii>=0&&a!=null){
					this.$parent.$parent.$children[ii].$el.__vue__.$data.a = a;
					this.$parent.$parent.$children[ii].$el.__vue__.$data.b = all;
				}
			}
		},
		computed: {},
		watch: {},
		components: {},
		updated() {},
		created() {}
	};
</script>
<style scoped="scoped">
	.checkbox-button {
		display: inline-block;
		position: relative;
		border: 1px solid #DCDFE6;
		border-radius: 2px;
		box-sizing: border-box;
		width: 14px;
		height: 14px;
		background-color: #fff;
		z-index: 1;
		transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
		cursor: pointer;
	}

	.checkbox-button:hover {
		border-color: #409EFF;
	}

	.b {
		display: inline-block;
		position: relative;
		border: 1px solid #DCDFE6;
		border-radius: 2px;
		box-sizing: border-box;
		width: 14px;
		height: 14px;
		z-index: 1;
		transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
		cursor: pointer;
		background: #409EFF;
	}

	.checkbox-text {
		color: #409EFF;
	}

	.b::after {
		box-sizing: content-box;
		content: "";
		border: 1px solid #fff;
		border-left: 0;
		border-top: 0;
		height: 7px;
		left: 4px;
		position: absolute;
		top: 1px;
		transform: rotate(45deg) scaleY(0);
		width: 3px;
		transition: transform .15s ease-in .05s;
		transform-origin: center;
	}

	.b::after {
		transform: rotate(45deg) scaleY(1);
	}
</style>

<template>
	<div @click="ss()" class="hyCheck">
		<span class="" :class="[a==true?b:'checkbox-button']">
		</span>
		<span :class="[a==true?'checkbox-text':'']" >
			全选
		</span>
	</div>
</template>
<script>
	export default {
		name: 'hy-check',
		props: {},
		data() {
			return {
				a: false,
				b:'c'
			};
		},
		mounted() {
		},
		methods: {
			ss() {
				this.a = !this.a;
				this.b='b';
				for(var j=0;j<this.$parent.$el.children.length;j++){
					if(document.querySelector('.hyCheckboxGroup')==this.$parent.$el.children[j]){
						for(var i=0;i<this.$parent.$el.children[j].children.length;i++){
							this.$parent.$el.children[j].children[i].__vue__.$data.a=this.a;
						}
					}
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
<style>
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

	.b ,.c{
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
	.checkbox-text{
		color:#409EFF;
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
	.c::after {
		content: '';
		position: absolute;
		display: block;
		background-color: #fff;
		height: 2px;
		transform: scale(0.5);
		left: 0;
		right: 0;
		top: 5px;
	}
</style>

<template>
	<div :class="[col!=null?'hy-col-'+col:'hy-col-24',
	              offset!=null?'hy-col-offset-'+offset:'',
				  pull!=null?'hy-col-pull-'+pull:'',
				  push!=null?'hy-col-push-'+push:'',
				  xs!=null?'hy-xs-'+xs:'',
				  sm!=null?'hy-sm-'+sm:'',
				  md!=null?'hy-md-'+md:'',
				  lg!=null?'hy-lg-'+lg:'',
				  xl!=null?'hy-xl-'+xl:''
				  ]">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'hy-col',
		props: {
			col: [Number,String],
			offset: [Number,String],
			pull: [Number,String],
			push: [Number,String],
			xs: [Number,String],
			sm: [Number,String],
			md: [Number,String],
			lg: [Number,String],
			xl: [Number,String],
		},
		data() {
			return {};
		},
		mounted() {

		},
		methods: {

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
</style>

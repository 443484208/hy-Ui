<template>
	<div :class="[col!=null?'hy-col-'+col:'24',
	              offset!=null?'hy-col-offset-'+offset:'',
				  pull!=null?'hy-col-pull-'+pull:'',
				  push!=null?'hy-col-push-'+push:'',
				  // xs!=null?'hy-col-xs-'+xs:'',
				  // sm!=null?'hy-col-sm-'+sm:'',
				  // md!=null?'hy-col-md-'+md:'',
				  // lg!=null?'hy-col-lg-'+lg:'',
				  // xl!=null?'hy-col-xl-'+xl:''
				  ]">
		<slot></slot>
	</div>

</template>
<script>
	export default {
		name:'hy-col',
		props: {
			col: Number,
			offset: Number,
			pull: Number,
			push: Number,
			xs: Number,
			sm: Number,
			md: Number,
			lg: Number,
			xl: Number,
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

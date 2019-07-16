<template>
	<div class="a">
		<h1>{{newDate}}</h1>
		<div class="b" v-for="(item,i) in arrDate" :key="i" @click="activeDate(item)" :class="[item.type=='new'?'':'b-last',item.active==arrType?'b-b':'']">
			{{item.i}}
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hy-datePicker',
		props: {},
		data() {
			return {
				newDate: '2019-07-16',
				arrDate: [],
				arrType:'aaaa'
			};
		},
		mounted() {
			this.newDateFn(this.newDate)
			console.log(this.newDate);
		},
		methods: {
			newDateFn(a) {
				var newDate = new Date(a);
				var newWeek = new Date(a);
				var newYear = new Date(a).getFullYear();
				var newMonth = (new Date(a).getMonth() + 1) < 10 ? '0' + (new Date(a).getMonth() + 1) : (new Date(
					a).getMonth() + 1);
				var newDay = new Date(a).getDate() < 10 ? '0' + new Date(a).getDate() : new Date(a).getDate();
				var day = this.getCountDays(a);
				var week = new Date(newYear + '-' + newMonth).getDay();
				var o=Number(newMonth)==1?(newYear-1) + '-12':(newYear+'-'+(Number(newMonth)-1))
				var oldDay = this.getCountDays(o);
				// var oldDay = this.getCountDays(newYear + '-' + (Number(newMonth) - 1));
				var lastweek = new Date(newYear + '-' + newMonth + '-' + day).getDay() + 1;
				this.newWeek(newWeek, week, day, newDay, oldDay, lastweek);
			},
			lastMonth(data,day){
				var newYear = new Date(data).getFullYear();
				
				var newMonth = (new Date(data).getMonth() ) < 10 ? '0' + (new Date(data).getMonth()) : (new Date(data).getMonth());
				var o=Number(newMonth)==0?(newYear-1) + '-12-'+day:(newYear+'-'+newMonth+'-'+(day<10?'0'+day:day))

			
				return (o)
			},
			futureMonth(data,day){
				var newYear = new Date(data).getFullYear();
				var newMonth = (new Date(data).getMonth()+2 ) < 10 ? '0' + (new Date(data).getMonth()+2) : (new Date(data).getMonth()+2);
				return (newYear+'-'+newMonth+'-'+(day<10?'0'+day:day))
			},
			newWeek(newWeek, week, day, newDay, oldDay, lastweek) {
				var last = lastweek == 7 ? 0 : (7 - lastweek);
				var a = 7 - week;
				var arr = [];
				var c = oldDay - week;
				var days = 1;
				for (var i = 1; i < (day + week + 1); i++) {
					if (oldDay == c) {
						arr.push({
							i:days,
							type:'new',
							active:days==newDay?'aaaa':'',
							
						})
						days = days + 1
					} else {
						c = c + 1;
						arr.push({
							i:c,
							type:'last'
						})
					}
				}
				for (var j = 0; j < last; j++) {
					arr.push({
							i:j+1,
							type:'future'
						});
				}
				this.arrDate = arr;
			},
			getCountDays(a = (new Date())) {
				var curDate = new Date(a);
				var curMonth = curDate.getMonth();
				curDate.setMonth(curMonth + 1);
				curDate.setDate(0);
				return curDate.getDate();
			},
			activeDate(item){
				if(item.type=='new'){
					this.arrType=item.i;
					item.active=item.i;
				}else if(item.type=='last'){
					this.newDate=this.lastMonth(this.newDate,item.i);
				}else if(item.type=='future'){
					this.newDate=this.futureMonth(this.newDate,item.i);
				}
			}

		},
		computed: {},
		watch: {
			newDate(value){
				this.newDateFn(value)

			}
		},
		components: {},
		updated() {},
		created() {}
	};
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.a{
		width: 700px;
	}
	.b{
		width: 100px;
		height: 100px;
		display: inline-block;
		text-align: center;
		line-height: 100px;
	}
	.b-last{
		color:#c9c9c9
	}
	.b-b{
		background: red;
		border-radius: 50%;
		
	}
</style>

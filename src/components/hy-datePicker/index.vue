<template>
	<div class="a">
		<div class="datePicker-header">
			<div>
				<span class="icon iconfont icon-datePicker-left" @click="jump('last','year')">&#xe609;</span>
				<span class="icon iconfont icon-datePicker-left" @click="jump('last','month')">&#xe60a;</span>
			</div>
			<div style="line-height: 42px;">
				{{newYear}}年 {{newMonth}} 月
			</div>
			<div>
				<span class="icon iconfont icon-datePicker-right" @click="jump('future','month')">&#xe608;</span>
				<span class="icon iconfont icon-datePicker-right" @click="jump('future','year')">&#xe607;</span>
			</div>
		</div>
		<div class="b" v-for="(item,i) in cn" :key="i+'s'">{{item}}</div>
		<div class="b" v-for="(item,i) in arrDate" :key="i" @click="activeDate(item)" :class="[item.type=='new'?'':'b-last',item.active==arrType?'b-b':'']">
			{{item.i}}
		</div>
	</div>
</template>
<script>
	export default {
		name: 'hy-datePicker',
		props: {
			value: [String, Number],
		},
		data() {
			return {
				newDate: '',
				newMonth: '',
				newYear: '',
				arrDate: [],
				arrType: 'aaaa',
				cn: ['日', '一', '二', '三', '四', '五', '六'],
			};
		},
		model: {
			prop: 'value',
			event: 'returnBack'
		},
		mounted() {
			this.newDate=this.value;
			console.log(this.value)
			this.newDateFn(this.newDate)
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
				var o = Number(newMonth) == 1 ? (newYear - 1) + '-12' : (newYear + '-' + (Number(newMonth) - 1))
				var oldDay = this.getCountDays(o);
				var lastweek = new Date(newYear + '-' + newMonth + '-' + day).getDay() + 1;
				this.newWeek(newWeek, week, day, newDay, oldDay, lastweek);
			},
			lastMonth(data, day) {
				var newYear = new Date(data).getFullYear();
				var newMonth = (new Date(data).getMonth()) < 10 ? '0' + (new Date(data).getMonth()) : (new Date(data).getMonth());
				var o = Number(newMonth) == 0 ? (newYear - 1) + '-12-' + day : (newYear + '-' + newMonth + '-' + (day < 10 ? '0' +
					day : day))
				return (o)
			},
			futureMonth(data, day) {
				var newYear = new Date(data).getFullYear();
				var newMonth = (new Date(data).getMonth() + 2) < 10 ? '0' + (new Date(data).getMonth() + 2) : (new Date(data).getMonth() +
					2);
				var o = Number(newMonth) == 11 ? (newYear + 1) + '-01-' + (day < 10 ? '0' + day : day) : (newYear + '-' + newMonth +
					'-' + (day < 10 ? '0' + day : day))
				return (o)
			},
			newWeek(newWeek, week, day, newDay, oldDay, lastweek) {
				week = week == 0 ? 7 : week;
				var last = lastweek == 7 ? 7 : (7 - lastweek);
				var a = 7 - week;
				var arr = [];
				var c = oldDay - week;
				var days = 1;
				for (var i = 1; i < (day + week + 1); i++) {
					if (oldDay == c) {
						arr.push({
							i: days,
							type: 'new',
							active: days,
						})
						days = days + 1
					} else {
						c = c + 1;
						arr.push({
							i: c,
							type: 'last'
						})
					}
				}
				for (var j = 0; j < last; j++) {
					arr.push({
						i: j + 1,
						type: 'future'
					});
				}
				this.arrDate = arr;
			},
			jump(type, item) {
				if (type == 'last') {
					if (item == 'year') {
						var a = new Date(this.newDate);
						var year = a.getFullYear() - 1
						var month = (a.getMonth() + 1) < 10 ? '0' + (a.getMonth() + 1) : (a.getMonth() +
							1);
						var o = (year + '-' + month);
						this.newDate = o;
					} else {
						var a = new Date(this.newDate);
						var year = a.getMonth() == 0 ? a.getFullYear() - 1 : a.getFullYear();
						var month = a.getMonth() == 0 ? 12 : (a.getMonth() < 10 ? '0' + a.getMonth() : a.getMonth());
						var o = (year + '-' + month);
						this.newDate = o;
					}
				} else {
					if (item == 'year') {
						var a = new Date(this.newDate);
						var year = a.getFullYear() + 1
						var month = (a.getMonth() + 1) < 10 ? '0' + (a.getMonth() + 1) : (a.getMonth() +
							1);
						var o = (year + '-' + month);
						this.newDate = o;
					} else {
						var a = new Date(this.newDate);
						var year = a.getMonth() == 11 ? a.getFullYear() + 1 : a.getFullYear();
						var month = a.getMonth() == 11 ? '01' : (a.getMonth() < 10 ? '0' + (a.getMonth() + 2) : a.getMonth() + 2);
						var o = (year + '-' + month);
						this.newDate = o;
					}
				}
				this.arrType = '';
			},
			getCountDays(a = (new Date())) {
				var year = new Date(a).getFullYear();
				var month = new Date(a).getMonth() + 1;
				let days = new Date(year, month, 0).getDate()
				return days;
			},
			activeDate(item) {
				if (item.type == 'new') {
					this.arrType = item.i;
					item.active = item.i;
				} else if (item.type == 'last') {
					this.newDate = this.lastMonth(this.newDate, item.i);
					this.arrType = item.i;
				} else if (item.type == 'future') {
					this.newDate = this.futureMonth(this.newDate, item.i);
					this.arrType = item.i;
				}
			}
		},
		computed: {},
		watch: {
			newDate(value) {
				this.newDateFn(value);
				var a = new Date(value);
				var year = a.getFullYear();
				var month = a.getMonth() + 1;
				this.newMonth = month;
				this.newYear = year;
				this.$emit('returnBack', value);

			},
			value(value){
				this.newDate=value;
			}
		},
		components: {},
		updated() {},
		created() {}
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.a {
		width: 294px;
	}

	.b {
		width: 42px;
		height: 42px;
		display: inline-block;
		text-align: center;
		line-height: 42px;
	}

	.b-last {
		color: #c9c9c9
	}

	.b-b {
		background: #409EFF;
		border-radius: 50%;
		color: white;

	}

	.icon-datePicker-left {
		width: 42px;
		height: 42px;
		display: inline-block;
		text-align: center;
		line-height: 42px;
		cursor: pointer;
	}

	.icon-datePicker-right {
		width: 42px;
		height: 42px;
		display: inline-block;
		text-align: center;
		line-height: 42px;
		cursor: pointer;

	}

	.datePicker-header {
		display: flex;
		justify-content: space-between;
	}
</style>

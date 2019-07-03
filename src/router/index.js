import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import a from './../components/a.vue'
import b from './../components/b.vue'
import test from './test';
Vue.use(Router)
const router = new Router({
	mode: "hash",
	routes: [{
			path: '/',
			name: 'home',
			component: Home,
			children: [{
				path: '/',
				name: 'home',
				components: {
					a: a,
					b: b,
				},
				props: {
					papa: true
				}
			}]
		},
		...test
	]
})
 // 全局前置守卫 进入路由之前
router.beforeEach((to, from, next) => {
	if (to.matched.length === 0) {                                        //如果未匹配到路由
	   next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
	} else {
	  next();                                                                            //如果匹配到正确跳转
	}
});
// 全局解析守卫在beforeRouteEnter调用之后调用
router.beforeResolve((to, from, next) => {
next();
});
// 全局后置钩子 进入路由之后
router.afterEach((to, from) => {
// console.log('afterEach 全局后置钩子');
});

export default router

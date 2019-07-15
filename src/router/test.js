import card from '../views/card.vue'
import popup from '../views/popup.vue'
export default [{
		path: '/demo/hyCol',
		name: 'hyCol',
		component: () => import( /* webpackChunkName: "about" */ './../components/hy-col/index.vue')
	},
	{
		path: '/demo/card',
		name: 'card',
		component: card
	},
	{
		path: '/demo/popup',
		name: 'popup',
		component: popup
	},
	{
		path: '/demo/hyMask',
		name: 'hyMask',
		component: () => import( /* webpackChunkName: "mask" */ './../views/mask.vue')
	},
	{
		path: '/demo/hyInput',
		name: 'hyInput',
		component: () => import( /* webpackChunkName: "input" */ './../views/input.vue')
	},
	{
		path: '/demo/icon',
		name: 'icon',
		component: () => import( /* webpackChunkName: "icon" */ './../views/icon.vue')
	},
	{
		path: '/demo/slider',
		name: 'hySlider',
		component: () => import( /* webpackChunkName: "hySlider" */ './../views/hySlider.vue')
	},
]

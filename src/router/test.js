import card from '../views/card.vue'
import popup from '../views/popup.vue'
export default [{
		path: '/demo/hyCol',
		name: 'hyCol',
		component: () => import( /* webpackChunkName: "col" */ './../views/hyCol.vue')
	},
	{
		path: '/demo/hySwitch',
		name: 'hySwitch',
		component: () => import( /* webpackChunkName: "switch" */ './../views/switch.vue')
	},
	{
		path: '/demo/card',
		name: 'hyCard',
		component: card
	},
	{
		path: '/demo/popup',
		name: 'hyPopup',
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
		name: 'hyIcon',
		component: () => import( /* webpackChunkName: "icon" */ './../views/icon.vue')
	},
	{
		path: '/demo/slider',
		name: 'hySlider',
		component: () => import( /* webpackChunkName: "slider" */ './../views/slider.vue')
	},
	{
		path: '/demo/iconfont',
		name: 'hyIconfont',
		component: () => import( /* webpackChunkName: "iconfont" */ './../views/iconfont.vue')
	},
	{
		path: '/demo/datePicker',
		name: 'hyDatePicker',
		component: () => import( /* webpackChunkName: "datePicker" */ './../views/datePicker.vue')
	},
	{
		path: '/demo/transfer',
		name: 'hyTransfer',
		component: () => import( /* webpackChunkName: "transfer" */ './../views/transfer.vue')
	},
	 {
	 	path: '/demo/checkboxss',
	 	name: 'hyCheckboxss',
	 	component: () => import( /* webpackChunkName: "checkboxss" */ './../views/checkboxss.vue')
	 },
	 {
	 	path: '/demo/checkss',
	 	name: 'hyCheckss',
	 	component: () => import( /* webpackChunkName: "checkss" */ './../views/checkss.vue')
	 }, 
	 {
	 	path: '/demo/checkboxGroupss',
	 	name: 'hyCheckboxGroupss',
	 	component: () => import( /* webpackChunkName: "checkboxGroupss" */ './../views/checkboxGroupss.vue')
	 }, 
]

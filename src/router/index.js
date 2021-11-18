import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

import Layout from '@/layout'



export const constantRoutes = [
	{
		path: "/index",
		name: 'Index',
		component: () => import('@/views/index/index'),
		meta: {
			title: '首页'
		}
	},
	{
		path: "/addUs",
		name: 'AddUs',
		component: () => import('@/views/index/addUs'),
		meta: {
			title: '加入我们'
		}
	},
	{
		path: '/',
		redirect: '/index',
		component: Layout,
		children: [

		]
	},
	{
		path: '/404',
		component: Layout,
		hidden: true,
		children: [{
			// 404页面
			path: '',
			component: () => import('@/views/404'),
			hidden: true
		}]

	},
	{
		path: '*',
		redirect: '/404',
		hidden: true
	},
]

const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

// router.beforeEach((to, from, next) => {
// 	next()
//   })

export default router

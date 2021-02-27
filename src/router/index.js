import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const page = require.context('./page', true, /.js$/)
const routes = page.keys().map(path => page(path).default)
/*vant router*/
const vantPage = require.context('./vant', true, /.js$/)
const vantRoutes = vantPage.keys().map(path => vantPage(path).default)
vantRoutes.map(item => {routes.push(item)})
/*your router*/
const errorRoute = { path: '/error', component: () => import('@/views/errorPage'), hidden: true }
const errorRedirect = { path: '*', redirect: '/error', hidden: true }
routes.push(errorRoute)
routes.push(errorRedirect)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

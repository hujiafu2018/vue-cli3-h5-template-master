export default {
    path:'/vant',
    name: 'vant',
    component: () => import(/* webpackChunkName: "vant-home" */ '@/vant/Home'),
    mate: {
        title:'vant'
    }
}
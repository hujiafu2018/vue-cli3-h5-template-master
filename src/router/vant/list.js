export default {
    path:'/vant-list',
    name: 'vant-list',
    component: () => import(/* webpackChunkName: "vant-list" */ '@/vant/List'),
    mate: {
        title:'list'
    }
}
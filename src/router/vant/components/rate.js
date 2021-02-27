export default {
    path:'/rate',
    name: 'rate',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Rate'),
    mate: {
        title:'rate'
    }
}
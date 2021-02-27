export default {
    path:'/notify',
    name: 'notify',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Notify'),
    mate: {
        title:'notify'
    }
}
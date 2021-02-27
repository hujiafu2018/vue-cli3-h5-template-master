export default {
    path:'/overlay',
    name: 'overlay',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Overlay'),
    mate: {
        title:'overlay'
    }
}
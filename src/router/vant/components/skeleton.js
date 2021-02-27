export default {
    path:'/skeleton',
    name: 'skeleton',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Skeleton'),
    mate: {
        title:'skeleton'
    }
}
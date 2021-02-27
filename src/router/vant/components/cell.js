export default {
    path:'/cell',
    name: 'cell',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Cell'),
    mate: {
        title:'cell'
    }
}
export default {
    path:'/panel',
    name: 'panel',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Panel'),
    mate: {
        title:'panel'
    }
}
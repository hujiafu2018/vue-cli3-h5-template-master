export default {
    path:'/step',
    name: 'step',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Step'),
    mate: {
        title:'step'
    }
}
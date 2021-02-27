export default {
    path:'/switchcell',
    name: 'switchcell',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/SwitchCell'),
    mate: {
        title:'switchcell'
    }
}
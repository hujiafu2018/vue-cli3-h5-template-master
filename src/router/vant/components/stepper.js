export default {
    path:'/stepper',
    name: 'stepper',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Stepper'),
    mate: {
        title:'stepper'
    }
}
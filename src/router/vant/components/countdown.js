export default {
    path:'/countdown',
    name: 'countdown',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/CountDown'),
    mate: {
        title:'countdown'
    }
}
export default {
    path:'/swipe',
    name: 'swipe',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Swipe'),
    mate: {
        title:'swipe'
    }
}
export default {
    path:'/popup',
    name: 'popup',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Popup'),
    mate: {
        title:'popup'
    }
}
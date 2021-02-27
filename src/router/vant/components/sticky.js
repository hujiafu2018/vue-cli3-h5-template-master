export default {
    path:'/sticky',
    name: 'sticky',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Sticky'),
    mate: {
        title:'sticky'
    }
}
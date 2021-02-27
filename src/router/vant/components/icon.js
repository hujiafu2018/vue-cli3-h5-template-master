export default {
    path:'/icon',
    name: 'icon',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Icon'),
    mate: {
        title:'icon'
    }
}
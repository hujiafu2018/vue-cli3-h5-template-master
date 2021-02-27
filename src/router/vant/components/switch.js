export default {
    path:'/switch',
    name: 'switch',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Switch'),
    mate: {
        title:'switch'
    }
}
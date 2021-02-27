export default {
    path:'/style',
    name: 'style',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Style'),
    mate: {
        title:'style'
    }
}
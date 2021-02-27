export default {
    path:'/collapse',
    name: 'collapse',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Collapse'),
    mate: {
        title:'collapse'
    }
}
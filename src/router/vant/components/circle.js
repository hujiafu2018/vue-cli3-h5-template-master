export default {
    path:'/circle',
    name: 'circle',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Circle'),
    mate: {
        title:'circle'
    }
}
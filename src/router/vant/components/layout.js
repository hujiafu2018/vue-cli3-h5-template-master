export default {
    path:'/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Layout'),
    mate: {
        title:'layout'
    }
}
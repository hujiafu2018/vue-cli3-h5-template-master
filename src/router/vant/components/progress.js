export default {
    path:'/progress',
    name: 'progress',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Progress'),
    mate: {
        title:'progress'
    }
}
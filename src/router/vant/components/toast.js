export default {
    path:'/toast',
    name: 'toast',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Toast'),
    mate: {
        title:'toast'
    }
}
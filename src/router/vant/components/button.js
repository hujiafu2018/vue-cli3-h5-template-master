export default {
    path:'/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Button'),
    mate: {
        title:'button'
    }
}
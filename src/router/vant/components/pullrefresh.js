export default {
    path:'/pullrefresh',
    name: 'pullrefresh',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/PullRefresh '),
    mate: {
        title:'pullrefresh'
    }
}
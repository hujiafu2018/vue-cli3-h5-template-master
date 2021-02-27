export default {
    path:'/loading ',
    name: 'loading ',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Loading '),
    mate: {
        title:'loading '
    }
}
export default {
    path:'/tag',
    name: 'tag',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Tag'),
    mate: {
        title:'tag'
    }
}
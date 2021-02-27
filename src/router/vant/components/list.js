export default {
    path:'/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/List'),
    mate: {
        title:'list'
    }
}
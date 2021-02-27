export default {
    path:'/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Search'),
    mate: {
        title:'search'
    }
}
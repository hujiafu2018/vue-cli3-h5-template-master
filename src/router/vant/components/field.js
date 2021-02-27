export default {
    path:'/field',
    name: 'field',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Field'),
    mate: {
        title:'field'
    }
}
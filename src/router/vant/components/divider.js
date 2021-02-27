export default {
    path:'/divider',
    name: 'divider',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Divider'),
    mate: {
        title:'divider'
    }
}
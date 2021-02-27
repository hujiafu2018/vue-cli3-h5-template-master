export default {
    path:'/picker',
    name: 'picker',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Picker'),
    mate: {
        title:'picker'
    }
}
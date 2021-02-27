export default {
    path:'/slider',
    name: 'slider',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Slider'),
    mate: {
        title:'slider'
    }
}
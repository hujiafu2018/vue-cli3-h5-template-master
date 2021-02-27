export default {
    path:'/image',
    name: 'image',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Image'),
    mate: {
        title:'image'
    }
}
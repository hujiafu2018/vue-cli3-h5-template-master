export default {
    path:'/uploader',
    name: 'uploader',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Uploader'),
    mate: {
        title:'uploader'
    }
}
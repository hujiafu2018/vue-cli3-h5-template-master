export default {
    path:'/imagepreview',
    name: 'imagepreview',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/ImagePreview'),
    mate: {
        title:'imagepreview'
    }
}
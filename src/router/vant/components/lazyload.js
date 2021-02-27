export default {
    path:'/lazyload',
    name: 'lazyload',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Lazyload'),
    mate: {
        title:'lazyload'
    }
}
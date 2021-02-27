export default {
    path:'/radio',
    name: 'radio',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Radio'),
    mate: {
        title:'radio'
    }
}
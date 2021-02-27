export default {
    path:'/actionsheet',
    name: 'actionsheet',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/ActionSheet'),
    mate: {
        title:'actionsheet'
    }
}
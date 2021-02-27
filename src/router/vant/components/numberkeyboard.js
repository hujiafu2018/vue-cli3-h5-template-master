export default {
    path:'/numberkeyboard',
    name: 'numberkeyboard',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/NumberKeyboard'),
    mate: {
        title:'numberkeyboard'
    }
}
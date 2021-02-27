export default {
    path:'/passwordinput',
    name: 'passwordinput',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/PasswordInput'),
    mate: {
        title:'passwordinput'
    }
}
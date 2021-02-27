export default {
    path:'/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Dialog'),
    mate: {
        title:'dialog'
    }
}
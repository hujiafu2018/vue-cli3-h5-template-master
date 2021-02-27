export default {
    path:'/checkbox',
    name: 'checkbox',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/Checkbox'),
    mate: {
        title:'checkbox'
    }
}
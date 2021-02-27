export default {
    path:'/noticebar',
    name: 'noticebar',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/NoticeBar'),
    mate: {
        title:'noticebar'
    }
}
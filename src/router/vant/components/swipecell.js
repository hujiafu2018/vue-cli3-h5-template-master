export default {
    path:'/swipecell',
    name: 'swipecell',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/SwipeCell'),
    mate: {
        title:'swipecell'
    }
}
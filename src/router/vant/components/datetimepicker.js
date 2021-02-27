export default {
    path:'/datetimepicker',
    name: 'datetimepicker',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/DatetimePicker'),
    mate: {
        title:'datetimepicker'
    }
}
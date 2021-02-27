export default {
    path:'/dropdownmenu',
    name: 'dropdownmenu',
    component: () => import(/* webpackChunkName: "vant" */ '@/vant/components/DropdownMenu'),
    mate: {
        title:'dropdownmenu'
    }
}
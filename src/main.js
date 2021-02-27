import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css';
import '@/styles/config/_reset.scss';

Vue.config.productionTip = false

import IconSvg from './components/icon-svg'
import { Dialog,Toast } from 'vant';

// 全局注册
Vue.use(Dialog);
Vue.use(Toast);

Vue.component('svg-icon',IconSvg)

const req = require.context('./icons', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);

// Vue.directive('lazy',{
//   inserted: el => {

//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

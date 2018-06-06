import Vue from 'vue'
import Index from './index.vue'

import '../../assets/common/css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import * as filters from '@/filters' // global filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
});

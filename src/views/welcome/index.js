import Vue from 'vue'
import Index from './index.vue'

import '../../assets/common/css/normalize.css'
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
});

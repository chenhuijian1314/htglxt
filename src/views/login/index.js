import Vue from 'vue'

import '../../assets/common/css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Index from './index.vue'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
});

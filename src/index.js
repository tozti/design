
import Hello from './components/test.vue';

import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

new Vue({
  el: '.app',
    render: h => h(Hello)

})

import Vue from 'vue'
import App from './App.vue'
import './assets/scss/theme.scss'
import router from './router'

Vue.config.productionTip = false

var vueInstance = new Vue({
  el: "#app",
  template: "<App/>",
  router,
  render: h => h(App)
});

export default vueInstance;

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

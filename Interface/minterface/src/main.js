import Vue from "vue";
import vSelect from 'vue-select';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

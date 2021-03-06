import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";

import "roboto-fontface/css/roboto/roboto-fontface.css";

import "material-design-icons-iconfont/dist/material-design-icons.css";

import "@mdi/font/css/materialdesignicons.css";

import VueMeta from "vue-meta";
import axios from "axios";
import i18n from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";

// Vue.http.options.crossOrigin = true;
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
axios.defaults.withCredentials = true;

Vue.use(FlagIcon);
Vue.use(VueMeta);
Vue.config.productionTip = false;

new Vue({
    i18n,
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");

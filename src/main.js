// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import WeVue from "we-vue";
import "we-vue/lib/style.css";
import "@/../static/css/font-awesome.css"
import App from "./App";
import router from "./router";
import store from "./store";

Vue.use(WeVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: { App }
});
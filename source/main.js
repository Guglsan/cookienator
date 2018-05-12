import Vue from "vue";

Vue.component("auth", require("./modules/auth.vue"));
Vue.component("navigation", require("./components/navigation.vue"));
Vue.component("products", require("./components/products.vue"));
Vue.component("statistics", require("./modules/statistics.vue"));
new Vue({
  el: "#cookienator",
  data: {
    page: "auth"
  },
  methods: {
    go(page) {
      this.page = page;
    }
  }
});

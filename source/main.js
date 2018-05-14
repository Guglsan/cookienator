import Vue from "vue";

Vue.component("auth", require("./modules/auth.vue"));
Vue.component("navigation", require("./components/navigation.vue"));
Vue.component("products", require("./components/products.vue"));
Vue.component("statistics", require("./modules/statistics.vue"));
Vue.component("btn", require("./components/btn.vue"));
new Vue({
  el: "#cookienator",
  data: {
    page: "statistics"
  },
  methods: {
    go(page) {
      this.page = page;
    },
    getPage() {
      return this.page;
    },
    setPage(page) {
      this.page = page;
    }
  },
  created() {
    window.getPage = this.getPage;
    window.setPage = this.setPage;
  }
});


import Vue from "vue";

Vue.component("auth", require("./modules/auth.vue"))
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
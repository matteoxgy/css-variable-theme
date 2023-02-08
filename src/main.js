import Vue from "vue";
import App from "./App.vue";

import themePlugin from "./plugins/themePlugin";
import themes from "./themes";

Vue.config.productionTip = false;

Vue.use(themePlugin, { themes, defaultTheme: "light" });

new Vue({
  render: (h) => h(App),
}).$mount("#app");

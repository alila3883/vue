import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";

// import "./filters"; // Global Filters
// import "./directives"; // Global Custom Directives

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

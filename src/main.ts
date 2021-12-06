import { createApp } from "vue";
import DKToast from "vue-dk-toast";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(DKToast, {
    duration: 3000,
    positionY: "bottom",
    positionX: "center",
    styles: {
      color: "#555",
      backgroundColor: "#f92",
      width: "200px",
      height: "80px",
      border: "3px solid #555",
    },
  })
  .use(store)
  .use(router)
  .mount("#app");

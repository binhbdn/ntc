import { createApp } from "vue";
import { createPinia } from "pinia";
import { usePrimeVue } from "./theme";
import App from "./App.vue";
import router from "./router";
import i18n from "@/library/i18n";
import "@/assets/styles.scss";

const app = createApp(App);
const pinia = createPinia();

usePrimeVue(app);
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");

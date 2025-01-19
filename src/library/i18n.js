import { createI18n } from "vue-i18n-lite";
import cn from "@/languages/cn";
import vi from "@/languages/vi";

const i18n = createI18n({
  locale: "vi",
  fallbackLocale: "vi",
  allowComposition: true,
  messages: {
    cn,
    vi
  }
});

export default i18n;

import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import ua from "./locales/ua.json";

export default createI18n({
  fallbackLocale: "en",
  defaultLocal: "en",
  locale: "en",
  legacy: false,
  globalInjection: true,
  messages: { en, ru, ua },
  runtimeOnly: false,
});

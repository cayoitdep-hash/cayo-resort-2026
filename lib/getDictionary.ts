import { en } from "../data/translations/en";
import { el } from "../data/translations/el";
import { de } from "../data/translations/de";
import type { Locale } from "./i18n";

export function getDictionary(locale: Locale) {
  switch (locale) {
    case "el":
      return el;
    case "de":
      return de;
    case "en":
    default:
      return en;
  }
}
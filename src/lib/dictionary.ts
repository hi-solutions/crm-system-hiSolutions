import "server-only";

export interface Dictionary {
  home: string;
  navHome: string;
  navFeatures: string;
  navPricing: string;
  navAbout: string;
  navContact: string;
  start14DaysTrial: string;
  heroMainText: string;
  heroToolsText: string;
}

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ar: () => import("../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (
  locale: keyof typeof dictionaries
): Promise<Dictionary> => {
  return dictionaries[locale]();
};

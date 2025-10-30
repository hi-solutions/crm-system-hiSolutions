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
  // Footer
  brandName: string;
  brandLegal: string;
  allRightsReserved: string;
  footerTagline: string;
  footerEmailPlaceholder: string;
  footerSignup: string;
  footerProduct: string;
  footerLearn: string;
  footerCompany: string;
  footerBadge: string;
  socialTwitterUrl: string;
  socialLinkedinUrl: string;
  socialFacebookUrl: string;
  faq1Question: string;
  faq1Answer: string;
  faq2Question: string;
  faq2Answer: string;
  faq3Question: string;
  faq3Answer: string;
  faq4Question: string;
  faq4Answer: string;
  faq5Question: string;
  faq5Answer: string;
  faq6Question: string;
  faq6Answer: string;
  faq7Question: string;
  faq7Answer: string;
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

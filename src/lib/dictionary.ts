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
  // Hero
  manage_your: string;
  real_estate_sales: string;
  easier_and_smarter: string;
  hero_descrption: string;
  testimonials: string;
  testimonials_title: string;
  testimonials_description: string;
  // Features
  features: string;
  powerful_tools_manage: string;
  integrated_platform_desc: string;
  start_now_free: string;
  everything_in_one_platform: string;
  comprehensive_advanced_tools: string;
  // Feature cards
  feature_team_collab_title: string;
  feature_team_collab_desc: string;
  feature_task_automation_title: string;
  feature_task_automation_desc: string;
  feature_reports_title: string;
  feature_reports_desc: string;
  feature_customer_mgmt_title: string;
  feature_customer_mgmt_desc: string;
  feature_email_integration_title: string;
  feature_email_integration_desc: string;
  feature_mobile_app_title: string;
  feature_mobile_app_desc: string;
  feature_advanced_security_title: string;
  feature_advanced_security_desc: string;
  feature_full_customization_title: string;
  feature_full_customization_desc: string;
  // Trusted By Section
  trusted_title: string;
  trusted_subtitle: string;
  stat_users_value: string;
  stat_users_label: string;
  stat_growth_value: string;
  stat_growth_label: string;
  stat_reviews_value: string;
  stat_reviews_label: string;
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

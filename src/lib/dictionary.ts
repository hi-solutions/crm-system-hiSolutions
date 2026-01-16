import "server-only";

// export type PricingPlanId = "basic" | "professional" | "enterprise";
export type PricingPlanId = "free" | "paid";

export type PricingComparisonValue = string | boolean | null;

export interface PricingComparisonRow
  extends Record<PricingPlanId, PricingComparisonValue> {
  label: string;
}

export interface PricingComparisonPlan {
  id: PricingPlanId | string;
  name: string;
  badge?: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

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
  allRightsReserved: string;
  footerTagline: string;
  footerEmailPlaceholder: string;
  footerSignup: string;
  footerProduct: string;
  footerLearn: string;
  footerCompany: string;
  socialTwitterUrl: string;
  socialLinkedinUrl: string;
  socialFacebookUrl: string;
  faqCategories: FAQCategory[];
  frequently_asked_questions: string;
  faq_description: string;
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
  // Feature detail: effective management section
  effective_management_tag: string;
  effective_management_title: string;
  effective_management_description: string;
  effective_management_list: string[];
  // Feature detail: smart insights section
  smart_insights_tag: string;
  smart_insights_title: string;
  smart_insights_description: string;
  smart_insights_list: string[];

  // Trusted By Section
  trusted_title: string;
  trusted_subtitle: string;
  stat_users_value: string;
  stat_users_label: string;
  stat_growth_value: string;
  stat_growth_label: string;
  stat_reviews_value: string;
  stat_reviews_label: string;
  // Feature detail: speed and efficiency section
  speed_and_efficiency_tag: string;
  speed_and_efficiency_title: string;
  speed_and_efficiency_description: string;
  speed_and_efficiency_list: string[];

  // who we are page
  //hero
  who_we_are_tag: string;
  who_we_are_title: string;
  who_we_are_description: string;
  learn_more: string;
  // about page: mission and vision
  our_mission_title: string;
  our_mission_description: string;
  our_vision_title: string;
  our_vision_description: string;
  // about page: what we do
  what_we_do_tag: string;
  what_we_do_description: string;
  crm_implementation: string;
  crm_implementation_desc: string;
  software_development: string;
  software_development_desc: string;
  digital_marketing: string;
  digital_marketing_desc: string;
  agency_services: string;
  agency_services_desc: string;
  consulting_strategy: string;
  consulting_strategy_desc: string;
  analytics_insights: string;
  analytics_insights_desc: string;
  //about page: how we work
  how_we_work_tag: string;
  how_we_work_description: string;
  //about page: meet our team
  meet_our_team_tag: string;
  meet_our_team_description: string;
  david_park: string;
  lead_developer: string;
  mohammed_al: string;
  marketing_head: string;
  ryan_gosling: string;
  cto: string;
  sara_ahmed: string;
  ceo: string;
  faster_solutions_for_clients: string;
  prevent_team_burnout: string;
  reduce_your_costs: string;
  testimonials_about: string;
  pricing: string;
  prices: string;
  flexible_pricing_plans: string;
  choose_the_right_plan: string;
  one_time_payment_forever_use: string;
  flexible_pricing_for_any_team: string;
  not_ready_to_pay: string;
  try_free_demo: string;
  pricing_price_currency_suffix: string;
  pricing_best_value_tag: string;
  // pricing_professional_tag: string;
  // pricing_professional_description: string;
  // pricing_professional_price: string;
  pricing_paid_button: string;
  // pricing_professional_advantages: string[];
  pricing_team_tag: string;
  pricing_team_description: string;
  pricing_team_price: string;
  pricing_free_button: string;
  pricing_team_advantages: string[];
  pricing_enterprise_tag: string;
  pricing_enterprise_description: string;
  pricing_enterprise_price: string;
  pricing_enterprise_button: string;
  pricing_enterprise_advantages: string[];
  comprehensive_comparison_of_plans: string;
  comprehensive_comparison_of_plans_description: string;
  pricing_comparison: {
    plans: PricingComparisonPlan[];
    rows: PricingComparisonRow[];
  };
  paid_plan: string;
  free_plan: string;
  everything_you_need: string;
  powerful_easy_tools: string;
  integrations: string;
  integrations_title: string;
  integrations_description: string;
  integrations_link_text: string;
  one_system: string;
  one_system_title: string;
  one_system_description: string;
  one_system_link_text: string;
  ticketing_title: string;
  ticketing_description: string;
  configurable_title: string;
  configurable_description: string;
  omnichannel_title: string;
  omnichannel_description: string;
  multiplayer_title: string;
  multiplayer_description: string;
  lightining_fast_title: string;
  lightining_fast_description: string;
  team_management_title: string;
  team_management_description: string;
  discovery_title: string;
  discovery_description: string;
  design_title: string;
  design_description: string;
  implementation_title: string;
  implementation_description: string;
  support_title: string;
  support_description: string;
  growth_title: string;
  growth_description: string;
  get_your_copy_now: string;
  quick_actions: string;
  quick_actions_description: string;

  social_media_integration: string;
  social_media_integration_description: string;

  team_commission_tracking: string;
  team_commission_tracking_description: string;

  smart_filtering: string;
  smart_filtering_description: string;

  manage_leads_per_month: string;
  limited_users: string;
  social_media_integration_feature: string;
  free_system_trial: string;
  ideal_for_small_teams: string;
  quick_actions_daily: string;
  unlimited_users: string;
  full_user_management: string;
  import_export_excel: string;
  manage_sales_rentals: string;
  manage_sales: string;
  real_time_notifications: string;
  full_social_integration: string;
  moneyBackGuarantee: string;
  EGP: string;

  // Contact Page
  contact_header_description: string;
  contact_get_in_touch: string;
  contact_subtitle: string;
  contact_name_label: string;
  contact_name_placeholder: string;
  contact_email_label: string;
  contact_email_placeholder: string;
  contact_phone_label: string;
  contact_phone_placeholder: string;
  contact_message_label: string;
  contact_message_placeholder: string;
  contact_send_button: string;
  contact_visit_us_title: string;
  contact_address_line1: string;
  contact_address_line2: string;

  // Subscription Modal
  modal_title_default: string;
  modal_title_plan: string;
  modal_subtitle: string;
  modal_email_placeholder: string;
  modal_password_placeholder: string;
  modal_phone_placeholder: string;
  modal_email_error: string;
  modal_phone_error: string;
  modal_password_error: string;
  modal_confirm_button: string;

  // Countries
  country_egypt: string;
  country_saudi_arabia: string;
  country_uae: string;
  country_united_states: string;
  country_kuwait: string;
  country_qatar: string;
  country_bahrain: string;
  country_oman: string;
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

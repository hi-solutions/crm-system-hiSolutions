import { getDictionary } from "@/lib/dictionary";
import Navbar from "./Navbar";

interface NavbarWrapperProps {
  lang: "ar" | "en";
}

export default async function NavbarWrapper({ lang }: NavbarWrapperProps) {
  const dict = await getDictionary(lang);

  // Define languages for the navbar
  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "العربية" },
  ];

  // Define navigation links (localized)
  const navLinks = [
    { label: dict.navHome, href: `/${lang}` },
    { label: dict.navFeatures, href: `/${lang}/our-features` },
    { label: dict.navPricing, href: `/${lang}/pricing` },
    { label: dict.navAbout, href: `/${lang}/about` },
    { label: dict.navContact, href: `/${lang}/contact` },
  ];

  return (
    <Navbar
      languages={languages}
      navLinks={navLinks}
      currentLang={lang}
      ctaButton={{ text: dict.get_your_copy_now, href: `/${lang}/contact` }}
    />
  );
}

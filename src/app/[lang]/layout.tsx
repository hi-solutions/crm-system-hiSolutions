import { isRTL, locales } from "@/middleware";
import { getDictionary } from "@/lib/dictionary";
import "./globals.css";
import { Cairo } from "next/font/google";
import { DictionaryProvider } from "@/hooks/Dickitionary";
import NavbarWrapper from "@/components/LangSwitcher/Navbar/NavbarWrapper";
import FooterPlus from "@/components/Footer/FooterPlus";
import { SubscriptionModalProvider } from "@/context/SubscriptionModalContext";
import SubscriptionModal from "@/components/Modals/SubscriptionModal";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export type Params = Promise<{ lang: "ar" | "en" }>;
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { lang } = await params;

  return {
    title: {
      template:
        lang === "ar"
          ? "%s | بناء ذا تيم: عقارات في مصر، الإمارات، السعودية واليونان"
          : "%s | Benaa The Team: Real Estate in Egypt, UAE, Saudi & Greece",
      default:
        lang === "ar"
          ? "Hi Estate:نظام إدارة علاقات العملاء العقاري"
          : "Hi Estate: Real Estate CRM System",
    },
    description:
      lang === "ar"
        ? "اكتشف عقارك المثالي مع بناء ذا تيم. استكشف الشقق والفلل والعقارات التجارية والمشاريع الجديدة في مصر والإمارات والسعودية واليونان. نقدم استشارات خبيرة، تصميم داخلي، إنشاءات وإدارة عقارية"
        : "Find your dream property with Benaa The Team. Explore apartments, villas, commercial properties & new developments in Egypt, UAE, Saudi Arabia & Greece. We offer expert advice, interior design, construction & property management.",
    keywords: [
      lang === "ar" ? "عقارات مصر" : "real estate egypt",
      lang === "ar" ? "عقارات الإمارات" : "real estate uae",
      lang === "ar" ? "عقارات السعودية" : "real estate saudi arabia",
      lang === "ar" ? "عقارات اليونان" : "real estate greece",
      lang === "ar" ? "استثمار عقاري" : "property investment",
      lang === "ar" ? "عقارات للبيع" : "property for sale",
      lang === "ar" ? "عقارات للإيجار" : "property for rent",
      lang === "ar" ? "شقق للبيع" : "apartments for sale",
      lang === "ar" ? "فلل للبيع" : "villas for sale",
      lang === "ar" ? "عقارات تجارية" : "commercial property",
      lang === "ar" ? "مشاريع جديدة" : "new developments",
      lang === "ar" ? "وكلاء عقاريين" : "real estate agents",
      lang === "ar" ? "إدارة عقارات" : "property management",
      lang === "ar" ? "تصميم داخلي" : "interior design",
      lang === "ar" ? "إنشاءات" : "construction",
      lang === "ar" ? "أخبار العقارات" : "real estate news",
    ],
    openGraph: {
      title:
        lang === "ar"
          ? "Hi Estate:نظام إدارة علاقات العملاء العقاري"
          : "Hi Estate: Real Estate CRM System",
      description:
        lang === "ar"
          ? "اكتشف عقارك المثالي مع بناء ذا تيم"
          : "Find your dream property with Benaa The Team",
      url: `https://the-team.co/${lang}`,
      type: "website",
      images: [
        {
          url: "https://the-team.co/api/images/img?id=6",
          width: 1200,
          height: 1200,
          alt: lang === "ar" ? "شعار بناء ذا تيم" : "Benaa The Team Logo",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://the-team.co/${lang}`,
      languages: {
        en: "https://the-team.co/en",
        ar: "https://the-team.co/ar",
      },
    },
  };
}

import { RefineProvider } from "@/providers/RefineProvider";
import Notification from "@/components/Notification/Notification";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={isRTL(lang) ? "rtl" : "ltr"}
      className={`${cairo.variable}`}
    >
      <body className={cairo.className}>
        <DictionaryProvider dictionary={dict} language={lang}>
          <SubscriptionModalProvider>
            <RefineProvider>
              <NavbarWrapper lang={lang} />
              {children}
              <FooterPlus />
              <SubscriptionModal />
              <Notification />
            </RefineProvider>
          </SubscriptionModalProvider>
        </DictionaryProvider>
      </body>
    </html>
  );
}

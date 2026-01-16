import { isRTL, locales } from "@/middleware";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import { DictionaryProvider } from "@/hooks/Dickitionary";
import NavbarWrapper from "@/components/LangSwitcher/Navbar/NavbarWrapper";
import Footer from "@/components/Footer/Footer";
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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = `Hi Estate | ${dict.footerTagline}`;
  const description = dict.hero_descrption;
  const baseUrl = "https://hiestate.app";

  // localized keywords
  const keywords = lang === 'ar'
    ? [
      "CRM عقاري",
      "برنامج إدارة التسويق العقاري",
      "نظام إدارة العملاء للعقارات",
      "برنامج CRM لشركات العقارات",
      "سيستم عقارات",
      "إدارة مبيعات العقارات",
      "Hi Estate",
      "Hi Solutions"
    ]
    : [
      "Real Estate CRM",
      "Real Estate CRM Egypt",
      "Property Management Software",
      "Real Estate Brokerage System",
      "Real Estate Sales Management",
      "CRM for Real Estate Agents",
      "Hi Estate",
      "Hi Solutions"
    ];

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: keywords,
    authors: [{ name: "Hi Solutions" }],
    creator: "Hi Solutions",
    publisher: "Hi Solutions",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: `/${lang}`,
      siteName: "Hi Estate",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/new_screens/new_screen_phone_mockup.webp",
          width: 1200,
          height: 630,
          alt: lang === "ar" ? "نظام إدارة العقارات هاي إستيت" : "Hi Estate Real Estate CRM",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/new_screens/new_screen_phone_mockup.webp"],
      creator: "@HiSolutions",
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
    icons: {
      icon: "/favicon.ico",
    },
    other: {
      "application-name": "Hi Estate",
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Hi Estate",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EGP"
              },
              "description": "The Best Real Estate CRM in Egypt. Manage leads, inventory, and sales teams efficiently.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "150"
              },
              "author": {
                "@type": "Organization",
                "name": "Hi Solutions",
                "url": "https://hisolutions.app"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hi Solutions",
              "url": "https://hiestate.app",
              "logo": "https://hiestate.app/api/logo-light",
              "sameAs": [
                "https://facebook.com/HiSolutionsEG",
                "https://www.linkedin.com/company/hi-solutions-eg"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+201003328484",
                "contactType": "sales",
                "areaServed": "EG",
                "availableLanguage": ["en", "ar"]
              }
            })
          }}
        />
        <DictionaryProvider dictionary={dict} language={lang}>
          <SubscriptionModalProvider>
            <RefineProvider>
              <NavbarWrapper lang={lang} />
              {children}
              <Footer />
              <SubscriptionModal />
              <Notification />
            </RefineProvider>
          </SubscriptionModalProvider>
        </DictionaryProvider>
      </body>
    </html>
  );
}

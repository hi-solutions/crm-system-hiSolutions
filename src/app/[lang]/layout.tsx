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

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: [
      "Real Estate CRM",
      "Hi Estate",
      "Hi Solutions",
      "Property Management",
      "Sales Management",
      "Egyptian Real Estate Market",
      "CRM for Real Estate",
    ],
    authors: [{ name: "Hi Solutions" }],
    creator: "Hi Solutions",
    publisher: "Hi Solutions",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://hiestate.app"), // Replace with actual domain if known
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: "./",
      siteName: "Hi Estate",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/new_screens/new_screen_phone_mockup.webp",
          width: 1200,
          height: 630,
          alt: "Hi Estate CRM Preview",
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

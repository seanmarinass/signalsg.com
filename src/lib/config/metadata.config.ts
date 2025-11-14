import { Metadata } from "next";

const siteConfig = {
  name: "Signal",
  title: "Signal | Where heart meets signal",
  description:
    "Experience authentic Korean drinking culture at Signal, an intimate Korean bar in Tanjong Pagar. Enjoy traditional soju, Korean craft beers, and signature cocktails inspired by Seoul's vibrant bar scene.",
  url: "https://signalsg.com",
  author: {
    name: "Signal",
    email: "signalsg@gmail.com",
  },
  keywords: [
    "Signal Singapore",
    "Korean Bar Singapore",
    "Tanjong Pagar Bar",
    "Korean Restaurant Singapore",
    "Authentic Korean Bar",
    "Seoul Bar Singapore",
    "Korean Drinking Culture",
    "Soju Bar Singapore",
    "Korean Cocktails",
    "Korean Craft Beer",
    "Korean BBQ Singapore",
    "한국 술집 싱가포르",
    "시그널 바",
    "탄종 파가 한국 바",
    "Singapore Korean Food",
    "Korean Nightlife Singapore",
    "Traditional Korean Bar",
    "Korean Alcohol Singapore",
    "Korean Bar Tanjong Pagar",
    "Signal Bar Singapore",
  ],
};

export const landingPageMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@signalsg",
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

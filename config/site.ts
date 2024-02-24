import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "BananaPLC",
  description:
    "Generate and Learn with You Own Way",
  url: "https://amazingdavid.com",
  ogImage: "#",
  metadataBase: new URL("https://amazingdavi.com"),
  keywords: ["Personal Learning", "Claure", "Book learning", "Book summarisation"],
  authors: [
    {
      name: "david",
      url: "https://amazingdavid.com",
    }
  ],
  creator: '@weijunext',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  links: {
    twitter: "https://twitter.com/shenghongzhong",
    github: "https://github.com/shenghongzhong",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}

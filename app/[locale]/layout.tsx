import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import WhatsAppButton from "@/src/copmonents/WhatsAppButton";
import SplashWrapper from "@/src/copmonents/SplashWrapper";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://humaidiworkout.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const isArabic = locale === "ar";

  const title = isArabic
    ? "حميدي عمر | مدرب لياقة أونلاين"
    : "Humaidi Omar | Online Fitness Coach";

  const description = isArabic
    ? "حوّل جسمك وابنِ انضباطك مع برامج تدريب ذكية وتغذية متوازنة."
    : "Transforming Bodies. Building Discipline.";

  const ogLocale = isArabic ? "ar_AE" : "en_US";

  return {
    metadataBase: new URL(siteUrl),

    title,
    description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },

    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "Humaidi Omar",
      images: [
        {
          url: "/images/og-cover.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: ogLocale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-cover.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SplashWrapper>
            {children}
            <WhatsAppButton />
          </SplashWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
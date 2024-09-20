"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import GoogleAnalyticsCustom from "@/components/custom/google-analytics";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
const gtag = "G-FZC53HN9TW";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
 
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}

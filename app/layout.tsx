import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Vatsa Shah",
  description: "Vatsa Shah — co-founder and CTO at Valiron, Uno Platform core maintainer, and software developer based in Montreal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeContextProvider>
          <a className="skip-link" href="#main">Skip to content</a>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

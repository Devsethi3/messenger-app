import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import ToasterContext from "@/context/ToasterContex";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/providers/theme-provider";
import NextAuthProvider from "@/providers/NextAuthProvider";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <head>
          <link
            rel="shortcut icon"
            href="/images/logo.png"
            type="image/x-icon"
          />
        </head>
        <body className={lexend.className}>
          <NextTopLoader
            color="#7C3AED"
            crawlSpeed={200}
            height={4}
            crawl={true}
            easing="ease"
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToasterContext />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}

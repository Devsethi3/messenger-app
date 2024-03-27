import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import ToasterContext from "@/context/ToasterContex";
import AuthContext from "@/context/AuthContext";
import NextTopLoader from "nextjs-toploader";
import ActiveStatus from "@/components/ActiveStatus";

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
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </head>
      <body className={lexend.className}>
        <NextTopLoader
          color="#6366F1"
          crawlSpeed={200}
          height={4}
          crawl={true}
          easing="ease"
        />
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}

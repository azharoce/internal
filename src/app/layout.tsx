const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
import { Inter } from "next/font/google";

import Header from "../layout/header";
import NavHeader from "../layout/navbar/NavHeader";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
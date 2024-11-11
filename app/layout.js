import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import FixedTopBar from "@/components/FixedTopBar";
import MobileNav from "@/components/MobileNav";
import MobileFooter from "@/components/MobileFooter";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fiducia Tax - Your Trusted Partner in Tax & Financial Services",
  description: "Expert tax filing, payroll processing, and customized financial solutions tailored to meet your unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <FixedTopBar />
        <Nav />
        <MobileNav />
        {children}
        <Footer />
        <MobileFooter />
      </body>
    </html>
  );
}

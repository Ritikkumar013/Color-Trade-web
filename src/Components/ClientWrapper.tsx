"use client";
import { usePathname } from "next/navigation";
import Header from "@/Components/CommonComponents/Header";
import Footer from "@/Components/CommonComponents/Footer";
import SplashScreen from "./SplashScreen";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const excludeHeaderFooter = ["/register", "/login", "/otp", "/wallet","/deposithistory","/withdrawalhistory","/bethistory","/transactionhistory","/account","/profile","/changepassword","/about","/privacy","/riskagreement","/support","/game1","/addMoney","/withMoney","/resetPassword","/newPassword"]; // Add any paths you want to exclude
  const shouldShowHeaderFooter = !excludeHeaderFooter.includes(pathname);

  return (
    <>
    <SplashScreen />
      {shouldShowHeaderFooter && <Header />}
      {children}
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

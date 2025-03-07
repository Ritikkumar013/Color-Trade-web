import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/Components/ClientWrapper";

export const metadata: Metadata = {
  title: "Diuvinn",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`antialiased max-w-lg mx-auto bg-white relative`} 
      >
        
        <ClientWrapper>
        {children}
        </ClientWrapper>
        
      </body>
    </html>
  );
}


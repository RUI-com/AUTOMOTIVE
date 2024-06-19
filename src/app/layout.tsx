import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "@/components";



export const metadata: Metadata = {
  title: "AUTOMOTIVE",
  description: "Created By RUI Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   <head>
   <link rel="shortcut icon" href="/logo/logo.svg" type="image/x-icon"/>
   </head>
      <body >
      <Navbar/>
        {children}
        </body>
    </html>
  );
}

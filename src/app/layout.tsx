import "./globals.css";
import { Header } from "@/components/global/header";
import { Suspense } from "react";
import { Footer } from "@/components/global/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Jianzin Fire Safety and Devices Trading</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <Suspense>
        <body
        className={`antialiased bg-gray-800 h-screen w-screen overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
      </Suspense>
      
    </html>
  );
}

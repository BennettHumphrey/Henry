import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Components/Nav/Nav";
import RecoilRootWrapper from "./Components/RecoilRootWrapper";
import LoadProducts from "./Components/LoadProducts";
import Whatsapp from "./Components/Whatsapp";
import Footer from "./Components/Footer";



export const metadata: Metadata = {
  title: "Henry",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <RecoilRootWrapper>
        <body className="bg-bg-light text-text-dark">
          <LoadProducts  />
          <Nav  />
          {children}
          <Whatsapp  />
          <Footer  />
        </body>
      </RecoilRootWrapper>
    </html>
  );
}

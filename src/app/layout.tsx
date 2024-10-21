import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Components/Nav/Nav";
import RecoilRootWrapper from "./Components/RecoilRootWrapper";



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
          <Nav  />
          {children}
        </body>
      </RecoilRootWrapper>
    </html>
  );
}

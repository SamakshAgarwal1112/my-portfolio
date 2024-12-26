import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Samaksh's Portfolio",
  description: "Visual Studio Code Editor Themed Portfolio created by Samaksh Agarwal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en dark">
      <body
        className={"h-[100vh]"}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

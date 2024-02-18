import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="h-screen flex-col">
          <Navbar />
          <div className="flex h-[85%]">
            <div className="w-1/6 h-full" style={{ borderRight: "1px solid gray" }}>
              <Sidebar />
            </div>
            <div className="w-5/6 h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

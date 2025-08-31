import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hussein | Front-End Developer",
  description:
    "Portfolio showcasing my projects and skills in Front-End development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#FFDD55] min-h-screen w-screen flex flex-col">
          {/* Header */}
          <header className="p-6  ">
            <Navbar />
          </header>

          {/* باقي الصفحة */}
          {children}
        </div>
      </body>
    </html>
  );
}

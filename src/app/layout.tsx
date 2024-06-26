import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// CONFIG
import { configSite } from '@/config/site'

interface PropsLayoutIndex {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(configSite.defaultUrl),
  title: "Administra tus tareas.",
  description: "Utiliza tareas-web para administrar tus tareas y compartirlas con amigos.",
};

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const RootLayout: React.FC<PropsLayoutIndex> = ({ children }) => {
  return (
    <html lang="en" className="">
      <body className={`${roboto.className} w-full h-screen bg-[var(--bg-100-light)] dark:bg-[var(--bg-100-dark)]`}>{children}</body>
    </html>
  );
}

export default RootLayout;

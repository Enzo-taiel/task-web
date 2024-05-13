import type { Metadata } from "next";
import { Roboto } from "next/font/google";

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
    <html lang="es">
      <body className={`${roboto.className} w-full h-screen `}>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;

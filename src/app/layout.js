import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <SpeedInsights/>
      </body>
    </html>
  );
}

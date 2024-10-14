
import "./globals.css";

import { Abhaya_Libre, Abril_Fatface } from "next/font/google";
import "./globals.css";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-abhaya-libre",
});

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril-fatface",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abhayaLibre.variable} ${abrilFatface.variable}`}>
        {children}
      </body>
    </html>
  );
}
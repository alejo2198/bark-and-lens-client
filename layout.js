import { Abhaya_Libre, Abril_Fatface } from "next/font/google";
import './styles/global.css'

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400","500","600", "700","800"],
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
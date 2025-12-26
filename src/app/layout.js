import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Configuração da fonte via Google Fonts
// Mantemos a variável '--font-clash' para não precisar alterar o CSS global
const fontPrimary = Outfit({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "André Monteiro | Portfolio",
  description: "Desenvolvedor Front-end e UI Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={fontPrimary.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}

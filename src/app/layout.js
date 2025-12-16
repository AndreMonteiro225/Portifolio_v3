import localFont from 'next/font/local';
import './globals.css';

// Configuração otimizada da fonte local
const clashDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash', // Variável CSS para usar no globals.css
  display: 'swap',
});

export const metadata = {
  title: 'André Monteiro | Portfolio',
  description: 'Desenvolvedor Front-end e UI Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={clashDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}
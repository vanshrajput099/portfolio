import { Poppins } from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header';
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "Portfolio",
  description: "Full Stack Web Developer - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}

import "@/app/styles/globals.css";
import MainLayout from "./_components/Layouts/MianLayout";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "B2B Technology Partner For Web, Mobile & Outsourcing | Codesinc",
  description:
    "B2B Technology Partner For Web, Mobile & Outsourcing | Codesinc",
  icons: ["/images/logo.png"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        spellCheck="false"
        className={`${montserrat.className} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

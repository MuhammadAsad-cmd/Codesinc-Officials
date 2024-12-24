import "@/app/styles/globals.css";
import MainLayout from "./_components/Layouts/MianLayout";

export const metadata = {
  title: "B2B Technology Partner For Web, Mobile & Outsourcing | Codesinc",
  description:
    "B2B Technology Partner For Web, Mobile & Outsourcing | Codesinc",
  icons: ["/images/logo.png"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" spellCheck="false">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

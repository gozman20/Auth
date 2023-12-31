import getCurrentUser from "@/actions/getUser";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ToastProvider from "@/toastProvider/ToastProvider";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import AdminModal from "./settings/(routes)/rooms/[roomId]/components/AdminModal";
import ClientOnly from "@/components/ClientOnly";
import styles from "@/components/styles";
import ModalProvider from "@/providers/ModalProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hotel",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <ModalProvider />
          <RegisterModal />
          <LoginModal />
          {/* <AdminModal /> */}
          <ToastProvider />
        </ClientOnly>
        <div className={`pb-20 pt-28 ${styles.paddingX}`}>{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

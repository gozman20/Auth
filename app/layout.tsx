import getCurrentUser from "@/actions/getUser";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ToastProvider from "@/toastProvider/ToastProvider";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import AdminModal from "@/components/modals/AdminModal";
import ClientOnly from "@/components/ClientOnly";
import styles from "@/components/styles";

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
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <RegisterModal />
          <LoginModal />
          <AdminModal />
          <ToastProvider />
        </ClientOnly>
        <div className={`pb-20 pt-28 ${styles.paddingX}`}>{children}</div>
      </body>
    </html>
  );
}

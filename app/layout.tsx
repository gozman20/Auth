import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import getCurrentUser from "./actions/getUser";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ToastProvider from "./toastProvider/ToastProvider";
import AdminModal from "./components/modals/AdminModal";
import ReservationModal from "./components/modals/ReservationModal";

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
        <Navbar currentUser={currentUser} />
        {/* <RegisterModal />
        <LoginModal />
        <AdminModal />

        <ToastProvider /> */}
        {children}
      </body>
    </html>
  );
}

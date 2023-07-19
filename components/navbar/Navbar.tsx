"use client";
import React from "react";
import styles from "../styles";
import { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import AdminModal from "../modals/AdminModal";
import useAdminModal from "@/app/hooks/useAdminModal";

interface NavProps {
  currentUser: SafeUser | null;
}

const Navbar: React.FC<NavProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const AdminModal = useAdminModal();
  const [header, setheader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setheader(true) : setheader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-4" : "bg-bb py-6 border-b border-main"
      } fixed z-50 w-full border-b-[2px] border-b-bb transition-all duration-500 ${
        styles.paddingX
      }`}
    >
      <div className="flex flex-row justify-between items-center ">
        <div
          className={`${header ? "text-bb" : ""}
         text-[25px] md:text-[40px] 
         flex flex-row justify-center
          items-center gap-x-3 `}
          onClick={() => router.push("/")}
        >
          <ImLocation2 className=" " />
          Hotel
        </div>
        <nav
          className={`md:flex flex-row items-center  gap-x-3 text-[14px] hidden ${
            header ? "text-dark/70" : "text-white "
          }`}
        >
          <div
            className="hover:border-b hover:border-bb"
            onClick={() => router.push("/")}
          >
            HOME
          </div>
          <div
            className="hover:border-b hover:border-bb"
            onClick={() => router.push("/rooms")}
          >
            ROOMS
          </div>
          {currentUser?.email === "oraka.emmanuel@gmail.com" ? (
            <div className="flex flex-row gap-2">
              <div onClick={AdminModal.onOpen}>ADMIN</div>
              <div onClick={() => router.push("/bookings")}>BOOKINGS</div>
            </div>
          ) : null}
          {currentUser ? (
            <div
              className="hover:border-b hover:border-bb"
              onClick={() => signOut()}
            >
              LOGOUT
            </div>
          ) : (
            <>
              <div
                className="hover:border-b hover:border-bb"
                onClick={registerModal.onOpen}
              >
                REGISTER
              </div>
              <div
                className="hover:border-b hover:border-bb"
                onClick={loginModal.onOpen}
              >
                LOGIN
              </div>
            </>
          )}

          <div className=""></div>
        </nav>
        <div
          className={`md:hidden text-[25px] ${
            header ? "text-dark/70" : "text-white"
          }`}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
};
export default Navbar;

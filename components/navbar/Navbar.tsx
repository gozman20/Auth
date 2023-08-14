"use client";
import React from "react";
import styles from "../styles";
import { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import useAdminModal from "@/hooks/useAdminModal";
import MobileFilters from "./MobileMenu";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "../ModeToggle";

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
      window.scrollY > 60 ? setheader(true) : setheader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "border-bb py-2" : "bg-whit py-3  border-b border-main"
      } fixed z-2 w-full  border-b-[2px] border-whit transition-all duration-500 ${
        styles.paddingX
      }`}
    >
      <div className="flex flex-row justify-between items-center ">
        <div
          onClick={() => router.push("/")}
          className="mr-auto flex items-center gap-x-3 text-[20px]"
        >
          {" "}
          <ImLocation2 className=" " />
          Hotel
        </div>

        <nav
          className={` 
           lg:flex lg:flex-row lg:items-center  lg:gap-x-3 text-[14px] hidden `}
        >
          {/* <ModeToggle /> */}
          <div
            className="hover:border-b hover:border-bb cursor-pointer"
            onClick={() => router.push("/")}
          >
            HOME
          </div>
          <div
            className="hover:border-b hover:border-bb cursor-pointer"
            onClick={() => router.push("/rooms")}
          >
            ROOMS
          </div>
          {currentUser?.email === "oraka.emmanuel@gmail.com" ? (
            <div className="flex flex-row gap-2">
              <div
                onClick={AdminModal.onOpen}
                className="hover:border-b hover:border-bb cursor-pointer"
              >
                ADMIN
              </div>
              <div
                className="hover:border-b hover:border-bb cursor-pointer"
                onClick={() => router.push("/settings")}
              >
                SETTINGS
              </div>
            </div>
          ) : null}
          {currentUser ? (
            <div
              className="hover:border-b hover:border-bb cursor-pointer"
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

          <div className=""> </div>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};
export default Navbar;

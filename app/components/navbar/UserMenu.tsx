"use client";
import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import RegisterToggler from "@/app/hooks/useRegister";
import LoginToggler from "@/app/hooks/useLogin";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: User | null | string;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const { openRegister } = RegisterToggler();
  const { openLogin } = LoginToggler();
  const router = useRouter();

  const toggle = () => {
    console.log(isOpenMenu);
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={toggle}
          className="p-4 md:px-2 md:py-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
        </div>
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
      {isOpenMenu && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="trip" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My properties" />
                <MenuItem onClick={() => signOut()} label="logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={openLogin} label="login" />
                <MenuItem onClick={openRegister} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;

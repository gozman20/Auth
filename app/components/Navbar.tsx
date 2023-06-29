import React from "react";
import Container from "./Container";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";
import UserMenu from "./navbar/UserMenu";
import { User } from "@prisma/client";
import Categories from "./navbar/Categories";

interface NavbarProps {
  currentUser?: User | null | string;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div
            className="
          flex 
          flex-row 
          justify-between
           items-center"
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;

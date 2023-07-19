"use client";
import React from "react";
import RegisterModal from "../components/modals/RegisterModal";
import LoginModal from "../components/modals/LoginModal";
import AdminModal from "../components/modals/AdminModal";

const ModalProvider = () => {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <AdminModal />
    </>
  );
};

export default ModalProvider;

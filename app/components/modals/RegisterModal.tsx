"use client";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import RegisterToggler from "../../hooks/useRegister";
import LoginToggler from "../../hooks/useLogin";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const { closeRegister, isOpenRegister } = RegisterToggler();
  const { openLogin } = LoginToggler();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = () => {
    if (isOpenRegister) {
      closeRegister();
      openLogin();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("api/register", data)
      .then(() => {
        toast.success("Succesfully registered");
        closeRegister();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading title="Nextjs/Typescript" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-2 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div
        className="
          text-neutral-500 
          text-center 
          mt-1 
          font-light
        "
      >
        <p>
          Already have an account?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      title="Register"
      disabled={isLoading}
      isOpen={isOpenRegister}
      body={bodyContent}
      footer={footerContent}
      onClose={closeRegister}
      actionLabel="Submit"
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;

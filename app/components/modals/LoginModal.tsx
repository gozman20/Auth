"use client";
import React, { useState } from "react";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import LoginToggler from "@/app/hooks/useLogin";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import RegisterToggler from "../../hooks/useRegister";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const { openLogin, closeLogin, isOpenLogin } = LoginToggler();
  const { openRegister, closeRegister, isOpenRegister } = RegisterToggler();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = () => {
    if (isOpenLogin) {
      closeLogin();
      openRegister();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log("Hello world");
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        closeLogin();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading title="Welcome back!" subtitle="Please enter your details!" />
      <Input
        id="email"
        label="Email"
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
            Register
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <>
      <Modal
        title="Login"
        body={bodyContent}
        actionLabel="Continue"
        onClose={closeLogin}
        isOpen={isOpenLogin}
        footer={footerContent}
        onSubmit={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default LoginModal;

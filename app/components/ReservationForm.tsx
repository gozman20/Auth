"use client";
import React from "react";
import Heading from "./Heading";
import Input from "./inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-gray-200">
      <div className="p-4">
        <Heading title="Please enter your details below" center />
        <div className="flex flex-col gap-3">
          <Input
            id="firstname"
            label="First Name"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="lastname"
            label="Last Name"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="email"
            label="Email"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="phone"
            label="Phone"
            type="number"
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Button label="BOOK NOW" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;

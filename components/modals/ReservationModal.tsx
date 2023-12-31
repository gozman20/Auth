"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import useReservationModal from "@/hooks/useReservationModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";

interface ReservationModalProps {
  dateRange: Range;
  totalPrice: number;
  roomId: string;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  dateRange,
  totalPrice,
  roomId,
}) => {
  const reservationModal = useReservationModal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log({ ...data, roomId });

    axios
      .post("/api/reservation", {
        ...data,
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        roomId: roomId,
      })
      .then(() => {
        toast.success("Booking Reserved");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  const bodyContent = (
    <div className="bg-gray-200">
      <div className="p-4">
        <Heading title="Please enter your details below" />
        <div className="flex flex-col gap-3">
          <Input
            id="firstname"
            label="First Name"
            disabled={isSubmitting}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="lastname"
            label="Last Name"
            disabled={isSubmitting}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="email"
            label="Email"
            disabled={isSubmitting}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="phone"
            label="Phone"
            type="number"
            disabled={isSubmitting}
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      body={bodyContent}
      title="Please fill the for form below"
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="PAY NOW"
      isOpen={reservationModal.isOpen}
      onClose={reservationModal.onClose}
    />
  );
};

export default ReservationModal;

"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import useAdminModal from "@/hooks/useAdminModal";
import Modal from "./Modal";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import Heading from "../Heading";

enum STEPS {
  CATEGORY = 0,
  INFO = 1,
  IMAGES = 2,
  PRICE = 3,
}

const AdminModal = () => {
  const router = useRouter();
  const adminModal = useAdminModal();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      guestCount: 1,
      bathroomCount: 1,
      image: "",
      price: 100,
      description: "",
    },
  });

  const guestCount = watch("guestCount");
  const bathroomCount = watch("bathroomCount");
  const image = watch("image");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    console.log(data);

    axios
      .post("/api/rooms", data)
      .then(() => {
        toast.success("Room created!");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        adminModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Category" subtitle="Add a category" />
      <Input
        id="title"
        label="Title"
        disabled={isSubmitting}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Guest and bathroom" />

        <Counter
          onChange={(value) => setCustomValue("guestCount", value)}
          value={guestCount}
          title="Guests"
          subtitle="How many guests do you allow?"
        />
        <hr />

        <Counter
          onChange={(value) => setCustomValue("bathroomCount", value)}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
        />
        <Input
          id="description"
          label="Description"
          disabled={isSubmitting}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Room photo" />
        <ImageUpload
          onChange={(value) => setCustomValue("image", value)}
          value={image}
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title=" Price" subtitle="Price per night?" />
        <Input
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isSubmitting}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isSubmitting}
      isOpen={adminModal.isOpen}
      title="Hotel your home!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={adminModal.onClose}
      body={bodyContent}
    />
  );
};

export default AdminModal;

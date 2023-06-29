"use client";
import React, { useEffect, useState, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose(): void;
  onSubmit(): void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;

  disabled?: boolean;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  //if the modal is closed, pls dont open it, else open it
  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    if (disabled) return;
    onSubmit();
  };

  return (
    <>
      {/* MODAL BACKGROUND */}
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        {/* CONTAINER FOR MODAL CONTENT */}
        <div
          className="
          relative 
          w-full
          h-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          
          lg:h-auto
          md:h-auto
          "
        >
          {/* MODAL CONTENT ANIMATION*/}
          <div
            className={`
            
            duration-500
            h-full
            ${showModal ? "translate-x-0" : "-translate-x-[400px]"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*HEADER*/}
              <div
                className="
                flex 
                items-center 
                p-3
                rounded-t
                justify-center
                relative
                border-b
                "
              >
                {/* CLOSE BUTTON */}
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* HEADER STOPS HERE */}

              {/* BODY BEGINS */}
              <div className="relative p-3 flex-auto border-b">{body}</div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-3">
                <div
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSubmit}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
              {/* FOOTER ENDS */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

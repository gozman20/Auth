"use client";

import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        <HiMenu size={25} />
      </div>
      <Transition appear show={open} as="div">
        <Dialog
          open={open}
          as="div"
          className="relative z-40 lg:hidden"
          onClose={onClose}
        >
          {/* Background color and opacity */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 "
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Dialog position */}
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 "
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                {/* Close button */}
                <div className="flex items-center justify-end px-4">
                  <AiOutlineClose size={25} onClick={onClose} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;

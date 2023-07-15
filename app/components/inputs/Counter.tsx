"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title?: string;
  value: number;
  subtitle?: string;
  onChange(value: number): void;
}

const Counter: React.FC<CounterProps> = ({ title, value, onChange,subtitle }) => {
  const onAdd = () => {
    onChange(value + 1);
  };
  const onReduce = () => {
    if (value === 0) {
      return;
    }
    onChange(value - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div>{title}</div>
      <div>
        {" "}
        <div className="flex flex-row items-center gap-4">
          <div
            onClick={onReduce}
            className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
          >
            <AiOutlineMinus size={24} />
          </div>
          <div className="font-light text-xl text-neutral-600">{value}</div>
          <div
            onClick={onAdd}
            className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
          >
            <AiOutlinePlus size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

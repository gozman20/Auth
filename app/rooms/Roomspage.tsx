"use client";
import React, { useCallback, useMemo, useState } from "react";
import Counter from "../components/inputs/Counter";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "../components/styles";
import qs from "query-string";
import Button from "../components/Button";
import { useSearchParams, useRouter } from "next/navigation";
import { Range } from "react-date-range";
import { formatISO, format } from "date-fns";
import Calendar from "@/app/components/inputs/calendar/Calendar";
import { IoMdArrowDropdown } from "react-icons/io";
import useDateRange from "../hooks/useDateRange";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const Roomspage = () => {
  const router = useRouter();
  const [openAdults, setOpenAdults] = useState(false);
  const params = useSearchParams();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const dateValue = useMemo(() => {
    if (dateRange.startDate && dateRange.endDate) {
      return `${format(dateRange.startDate, "PP")} - ${format(
        dateRange.endDate,
        "PP"
      )}`;
    }
  }, [dateRange]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      kids: 0,
      adults: 1,
      //   startDate: "",
      //   endDate: "",
    },
  });

  const kids = watch("kids");
  const adults = watch("adults");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      guestCount: kids + adults,
    };
    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }
    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }
    const url = qs.stringifyUrl(
      {
        url: "/rooms",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [params, adults, kids, isLoading, dateRange, router]);

  const actionLabel = useMemo(() => {
    if (isLoading) return "Loading";
    return "Search";
  }, [isLoading]);

  const toggle = () => {
    setOpenCalendar((prev) => !prev);
  };
  const toggleAdults = () => {
    setOpenAdults((prev) => !prev);
  };

  return (
    <div className={` ${styles.boxWidth}  `}>
      <div className={`${styles.paddingX} w-full`}>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-3">
          <div className=" flex-1 w-full">
            <input
              readOnly
              value=""
              placeholder=""
              onClick={toggle}
              className="focus:outline-none border-[2px] border-black/60 p-3 w-full"
            />

            <div className="absolute z-10 top-[40px] left-0">
              {openCalendar && (
                <Calendar
                  value={dateRange}
                  onChange={(value) => setDateRange(value.selection)}
                />
              )}
            </div>
          </div>

          <div
            className="flex-1 border-2 w-full p-4 relative flex flex-row justify-between"
            onClick={toggleAdults}
          >
            Adults
            <IoMdArrowDropdown size={25} />
            {openAdults && (
              <div className="absolute top-[60px] right-0 z-20 bg-white border p-2">
                <Counter
                  //   title="Adult"
                  value={adults}
                  onChange={(value) => setCustomValue("adults", value)}
                />
              </div>
            )}
          </div>

          <div className="flex-1 border-2 w-full">
            <Counter
              title="kids"
              value={kids}
              onChange={(value) => setCustomValue("kids", value)}
            />
          </div>

          <div className="flex-1 w-full">
            <Button
              small={false}
              label={actionLabel}
              disabled={isLoading}
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomspage;

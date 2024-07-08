"use client";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";
import Dots from "@/../public/dots-vertical-svgrepo-com (1).svg";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

interface TableProps {
  data: {
    id: string;
    imageURL: string;
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number | null;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [openDropMenu, setOpenDropMenu] = useState<number>(0);
  const dropDownRef = useRef(null);
  console.log("ref", dropDownRef);
  useClickOutside(
    dropDownRef,
    () => {
      if (openDropMenu !== 0) {
        setOpenDropMenu(0);
      }
    },
    openDropMenu
  );
  return (
    <>
      <div
        className="w-9/12 transition-colors duration-300 border divide-slate-200 dark:divide-slate-700
        dark:border-[#444952] border-[#f3f4f6] rounded-xl text-sm overflow-hidden"
      >
        <header className="transition-colors duration-300 bg-white dark:bg-[#111827] flex justify-between w-full px-6 py-3">
          <div className="w-16">CABIN</div>
          <div className="w-56">GUESTS</div>
          <div className="w-56">DATES</div>
          <div className="w-24">AMOUNT</div>
          <div className="w-24">STATUS</div>
          <div className="w-16 text-[#111827]">OPTIONS</div>
        </header>
        <hr />
        <section className="divide-[#1f2937] divide-y bg-[#18212f]">
          {data?.map((item: any) => (
            <div
              className="flex justify-between items-center w-full px-6 py-3 relative"
              key={item.id}
            >
              <Image src={item.imageURL} alt="cabin" width={64} height={64} />
              <div className="w-56">{item.maxCapacity}</div>
              <div className="w-56">{item.regularPrice}</div>
              <div className="w-24">{item.regularPrice - item?.discount}</div>
              <div
                className={`w-24 ${item.discount == null ? "" : "text-green-300"}`}
              >
                {item.discount == null ? "-" : item.discount}
              </div>
              <Image
                onClick={() => {
                  setOpenDropMenu(item.id);
                }}
                className="w-16 h-8 font-bold dark:text-white dark:dots dot flex justify-center"
                src={Dots}
                alt="dots"
              />
              {openDropMenu == item.id && (
                <div
                  ref={dropDownRef}
                  className={`
                    absolute right-20 p-10 z-10 bg-white dark:bg-[#528eef] ${openDropMenu == item.id ? "" : "hidden"}`}
                >
                  <p
                    onClick={() => {
                      console.log("21212121");
                    }}
                    className="hover:bg-[#f9fafb] dark:hover:bg-[#111827] cursor-pointer"
                  >
                    Duplicate
                  </p>
                  <p className="hover:bg-[#f9fafb] dark:hover:bg-[#111827]">
                    Edit
                  </p>
                  <p className="hover:bg-[#f9fafb] dark:hover:bg-[#111827]">
                    Delete
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
      <div className="transition-colors duration-300 flex w-full justify-center items-center">
        {data ? "" : <LoadingSpinner />}
      </div>
    </>
  );
};

export default Table;

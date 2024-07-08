"use client";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";
import Dots from "@/../public/dots-vertical-svgrepo-com (1).svg";
import { ReactNode, useRef, useState, MouseEvent } from "react";
import ReactDOM from "react-dom";
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

interface PopoverProps {
  children: React.ReactNode;
  target: { top: number; left: number };
  visible: boolean;
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [openDropMenu, setOpenDropMenu] = useState<number>(0);

  const [popover, setPopover] = useState<{
    visible: boolean;
    target: { top: number; left: number };
    content: ReactNode;
  }>({
    visible: false,
    target: { top: 0, left: 0 },
    content: <></>,
  });

  const showPopover = (
    e: React.MouseEvent<HTMLElement>,
    content: React.ReactNode
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopover({
      visible: true,
      target: {
        top: rect.top + window.scrollY + rect.height,
        left: rect.left + window.scrollX,
      },
      content,
    });
  };

  const hidePopover = () => setPopover({ ...popover, visible: false });

  const dropDownRef = useRef(null);

  useClickOutside(
    dropDownRef,
    () => {
      hidePopover();
    },
    openDropMenu
  );

  const Popover = ({ children, target, visible }: PopoverProps) => {
    if (!visible) return null;

    const popoverContent = (
      <div
        className="absolute w-6 h-10"
        style={{ top: target.top, left: target.left }}
      >
        {children}
      </div>
    );

    return ReactDOM.createPortal(popoverContent, document.body);
  };

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

              <Popover target={popover.target} visible={true}>
                {popover.content}
              </Popover>

              <Image
                onClick={(e) =>
                  showPopover(
                    e,
                    <div
                      ref={dropDownRef}
                      className={`absolute shadow-sm right-2 z-10 text-white  bg-[#18212F] rounded overflow-hidden`}
                    >
                      <p className=" p-1 px-6  hover:bg-[#111827] cursor-pointer">
                        Duplicate
                      </p>
                      <p className=" p-1 px-6 cursor-pointer hover:bg-[#111827]">
                        Edit
                      </p>
                      <p className="] p-1 px-6 cursor-pointer hover:bg-[#111827]">
                        Delete
                      </p>
                    </div>
                  )
                }
                className={`w-8 h-8 font-bold dark:text-white dark:dots dot flex justify-center`}
                src={Dots}
                alt="dots"
              />
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

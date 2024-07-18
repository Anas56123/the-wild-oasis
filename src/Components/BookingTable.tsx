"use client";
import { ItemPerPage } from "@/app/(home)/bookings/page";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect, useState } from "react";

interface TableProps {
  data: {
    id: string;
    cabinID: number;
    guestsID: number;
    startDate: string;
    endDate: string;
    status: string;
    totalPrice: number;
  }[];
  setPageNum: Function;
  pageNum: number;
  dataLength: number;
  getFromAndTo: Function;
}

const Table: React.FC<TableProps> = ({
  data,
  setPageNum,
  pageNum,
  dataLength,
  getFromAndTo,
}) => {
  let { to, from } = getFromAndTo();
  console.log(
    "dataLength & ItemPerPage:",
    dataLength,
    Math.ceil(dataLength / ItemPerPage),
    ItemPerPage,
    pageNum
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
          <div className="w-72">DATES</div>
          <div className="w-24">STATUS</div>
          <div className="w-24">AMOUNT</div>
        </header>
        <hr />
        <section className="divide-[#1f2937] divide-y bg-[#18212f]">
          {data?.map((item: any) => (
            <div
              className="flex justify-between items-center w-full px-6 py-3"
              key={item.id}
            >
              <div className="w-16">{"00" + item.cabinID}</div>
              <div className="w-56">
                <span>{item.Guests.full_name}</span>
                <br />
                <span className="text-sm text-[#9ca3af]">
                  {item.Guests.email}
                </span>
              </div>
              <div className="w-72">DATES</div>
              <div className="w-24">
                <mark
                  className={`transition-colors duration-300 dark:text-slate-50 font-semibold text-xs px-2 py-1 rounded-full ${
                    item.status == "unconfirmed"
                      ? "dark:bg-sky-800 bg-sky-100 text-sky-800"
                      : item.status == "check in"
                        ? "dark:bg-green-700 bg-green-100 text-green-700"
                        : item.status == "check out"
                          ? "dark:bg-gray-500 bg-gray-100 text-gray-500"
                          : ""
                  }`}
                >
                  {item.status.toUpperCase()}
                </mark>
              </div>
              <div className="w-24">{item.totalPrice}</div>
            </div>
          ))}
        </section>
        <hr />
        <footer className="m-4 flex items-center justify-between bg-[#111827]">
          <p>
            Showing <strong>{from + 1}</strong> to{" "}
            <strong>{to + 1 > dataLength ? dataLength : to + 1}</strong> of{" "}
            <strong>{dataLength}</strong> results
          </p>
          <div className="flex gap-5">
            <button
              className={`${pageNum == 1 ? "cursor-not-allowed" : ""}`}
              disabled={pageNum == 1 ? true : false}
              onClick={() => setPageNum(pageNum - 1)}
            >
              {"<"} Previous
            </button>
            <button
              className={`${pageNum == Math.ceil(dataLength / ItemPerPage) ? "cursor-not-allowed" : ""}`}
              disabled={
                pageNum == Math.ceil(dataLength / ItemPerPage) ? true : false
              }
              onClick={() => {
                setPageNum(pageNum + 1);
              }}
            >
              Next {">"}
            </button>
          </div>
        </footer>
      </div>
      <div className="transition-colors duration-300 flex w-full justify-center items-center">
        {data ? "" : <LoadingSpinner />}
      </div>
    </>
  );
};

export default Table;

"use client";
import { useEffect, useState } from "react";
import DonutBar from "@/Components/DonutBar";
import Graph from "@/Components/Graph";
import Table from "@/Components/BookingTableWithCI&CO";
import { getBookings } from "@/Data/GET/getBookings";
import ClientOnly from "@/utils/ClientOnly";
import { getBookingsCI } from "@/Data/GET/getBookingsCI";
import { getBookingsCO } from "@/Data/GET/getBookingsCO";

type BtnBg = "" | "btn-1" | "btn-2" | "btn-3";

export default function Home() {
  const [data, setData] = useState([]);
  const [dataCI, setDataCI] = useState([]);
  const [dataCO, setDataCO] = useState([]);
  const [bg, setBg] = useState<BtnBg>("");
  const [bgClick, setBgClick] = useState<BtnBg>("");

  useEffect(() => {
    (async function () {
      const fd: any = await getBookings();
      setData(fd);
    })();
    (async function () {
      const fd: any = await getBookingsCI();
      setDataCI(fd);
    })();
    (async function () {
      const fd: any = await getBookingsCO();
      setDataCO(fd);
    })();
  }, []);

  function handleClick(state: BtnBg) {
    setBgClick(state);
  }

  function handleMouseEnter(state: BtnBg) {
    setBg(state);
  }

  function handleMouseLeave() {
    setBg("");
  }

  return (
    <ClientOnly>
      <div className="transition-colors duration-300 flex flex-col items-center">
        <br />
        <div className="transition-colors duration-300 flex justify-between items-center w-4/5">
          <h1 className="transition-colors duration-300 text-4xl font-semibold dark:text-slate-50">
            Dashboard
          </h1>
          <div className="transition-colors duration-300 border-slate-50 dark:border-slate-800 border bg-wihte rounded flex justify-between px-1 py-1 bg-white dark:bg-[#18212f]">
            <button
              onClick={() => handleClick("btn-1")}
              onMouseEnter={() => handleMouseEnter("btn-1")}
              onMouseLeave={() => handleMouseLeave()}
              className={`transition-colors duration-300 rounded px-1  dark:text-slate-50 ${
                bg == "btn-1" || bgClick == "btn-1" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-1" ? "border-slate-400 border" : ""}`}
            >
              Last 7 days
            </button>
            <button
              onClick={() => handleClick("btn-2")}
              onMouseEnter={() => handleMouseEnter("btn-2")}
              onMouseLeave={() => handleMouseLeave()}
              className={`transition-colors duration-300 rounded px-1  dark:text-slate-50 ${
                bg == "btn-2" || bgClick == "btn-2" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-2" ? "border-slate-400 border" : ""}`}
            >
              Last 30 days
            </button>
            <button
              onClick={() => handleClick("btn-3")}
              onMouseEnter={() => handleMouseEnter("btn-3")}
              onMouseLeave={() => handleMouseLeave()}
              className={`transition-colors duration-300 rounded px-1  dark:text-slate-50 ${
                bg == "btn-3" || bgClick == "btn-3" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-3" ? "border-slate-400 border" : ""}`}
            >
              Last 90 days
            </button>
          </div>
        </div>
        <br />
        <div className="transition-colors duration-300 grid grid-cols-me-4 grid-rows-me-7 gap-10">
          <div className="transition-colors duration-300 flex items-center gap-4 bg-white dark:bg-[#18212f] border-slate-200 px-2 w-72 rounded-lg border dark:border-[#1f2937] border-[#f3f4f6] h-24">
            <div className="transition-colors duration-300 rounded-full bg-sky-100 dark:bg-sky-700 h-16 w-16 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="transition-colors duration-300 w-10 h-10 dark:text-slate-100 text-sky-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div className="transition-colors duration-300 flex flex-col gap-1">
              <p className="transition-colors duration-300 font-semibold text-stone-400 text-xs">
                BOOKINGS
              </p>
              <span className="transition-colors duration-300 font-semibold dark:text-slate-50 text-2xl">
                {data?.length}
              </span>
            </div>
          </div>
          <div className="transition-colors duration-300 flex items-center gap-4 bg-white dark:bg-[#18212f] border-slate-200 px-2 w-72 rounded-lg border dark:border-[#1f2937] border-[#f3f4f6] h-24">
            <div className="transition-colors duration-300 rounded-full bg-green-100 dark:bg-green-700 h-16 w-16 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="transition-colors duration-300 w-10 h-10 dark:text-slate-100 text-green-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </div>
            <div className="transition-colors duration-300 flex flex-col gap-1">
              <p className="transition-colors duration-300 font-semibold text-stone-400 text-xs">
                SALES
              </p>
              <span className="transition-colors duration-300 font-semibold dark:text-slate-50 text-2xl">
                $1,960.00
              </span>
            </div>
          </div>
          <div className="transition-colors duration-300 flex items-center gap-4 bg-white dark:bg-[#18212f] border-slate-200 px-2 w-72 rounded-lg border dark:border-[#1f2937] border-[#f3f4f6] h-24">
            <div className="transition-colors duration-300 rounded-full bg-indigo-100 dark:bg-indigo-800 h-16 w-16 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="transition-colors duration-300 w-10 h-10 dark:text-slate-100 text-indigo-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>
            <div className="transition-colors duration-300 flex flex-col gap-1">
              <p className="transition-colors duration-300 font-semibold text-stone-400 text-xs">
                CHECK INS
              </p>
              <span className="transition-colors duration-300 font-semibold dark:text-slate-50 text-2xl">
                {dataCI?.length}
              </span>
            </div>
          </div>
          <div className="transition-colors duration-300 flex items-center gap-4 bg-white dark:bg-[#18212f] border-slate-200 px-2 w-72 rounded-lg border dark:border-[#1f2937] border-[#f3f4f6] h-24">
            <div className="transition-colors duration-300 rounded-full bg-orange-100 dark:bg-yellow-800 h-16 w-16 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="transition-colors duration-300 w-10 h-10 dark:text-slate-100 text-yellow-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </div>
            <div className="transition-colors duration-300 flex flex-col gap-1">
              <p className="transition-colors duration-300 font-semibold text-stone-400 text-xs">
                OCCUPANCY RATE
              </p>
              <span className="transition-colors duration-300 font-semibold dark:text-slate-50 text-2xl">
                32%
              </span>
            </div>
          </div>
          <div className="transition-colors duration-300 col-span-2 row-span-3 border rounded-lg flex flex-col items-center dark:bg-[#18212f] bg-white dark:border-[#1f2937] border-[#f3f4f6]">
            <br />
            <div className="transition-colors duration-300 w-11/12">
              <h1 className="transition-colors duration-300 dark:text-slate-50 text-2xl font-semibold">
                Today
              </h1>
            </div>
            <br />
            <Table data={[...dataCI, ...dataCO]} />
          </div>
          <div className="transition-colors duration-300 col-span-2 row-span-3 w-full flex flex-col justify-center items-center dark:bg-[#18212f] bg-white border rounded-lg dark:border-[#1f2937] border-[#f3f4f6] border-slate-200">
            <h2 className="transition-colors duration-300 dark:text-slate-50 font-semibold text-2xl">
              Stay duration summary
            </h2>
            <br />
            <div className="transition-colors duration-300 w-64">
              <DonutBar />
            </div>
          </div>
          <div className="transition-colors duration-300 col-span-4 row-span-3 px-3 border rounded-lg bg-white border-slate-200 dark:bg-[#18212f] dark:border-[#1f2937] border-[#f3f4f6]">
            <Graph />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

"use client";
import { useEffect, useState } from "react";
import DonutBar from "@/Components/DonutBar";
import Graph from "@/Components/Graph";
import Table from "@/Components/BookingTableWithCI&CO";
import { getBookings } from "@/Data/GET/getBookings";
import ClientOnly from "@/utils/ClientOnly";

type BtnBg = "" | "btn-1" | "btn-2" | "btn-3";

export default function Home() {
  const [data, setData] = useState([]);
  const [bg, setBg] = useState<BtnBg>("");
  const [bgClick, setBgClick] = useState<BtnBg>("");

  useEffect(() => {
    async function getData() {
      const fd: any = await getBookings();
      setData(fd);
    }
    getData();
  }, [])

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
      <div>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-4xl font-bold dark:text-slate-50">Dashboard</h1>
          <div className="border-slate-800 border-2 bg-wihte rounded flex justify-between px-1 dark:bg-slate-900">
            <button
              onClick={() => handleClick("btn-1")}
              onMouseEnter={() => handleMouseEnter("btn-1")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-1" || bgClick == "btn-1" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-1" ? "border-slate-400 border" : ""}`}
            >
              Last 7 days
            </button>
            <button
              onClick={() => handleClick("btn-2")}
              onMouseEnter={() => handleMouseEnter("btn-2")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-2" || bgClick == "btn-2" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-2" ? "border-slate-400 border" : ""}`}
            >
              Last 30 days
            </button>
            <button
              onClick={() => handleClick("btn-3")}
              onMouseEnter={() => handleMouseEnter("btn-3")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-3" || bgClick == "btn-3" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-3" ? "border-slate-400 border" : ""}`}
            >
              Last 90 days
            </button>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-me-4 grid-rows-me-7 gap-7">
          <div className="flex items-center gap-4 bg-slate-800 py-2 px-2 w-72 rounded-lg border border-slate-700 h-28">
            <div className="rounded-full bg-sky-600 h-20 w-20 flex justify-center items-center">
              {/* <Image alt="briefcase" width="50" height="50" src={briefcase} /> */}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-stone-400 text-xs">BOOKINGS</p>
              <span className="font-bold text-slate-50 text-2xl">Number</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-800 py-2 px-2 w-72 rounded-lg border border-slate-700 h-28">
            <div className="rounded-full bg-green-600 h-20 w-20 flex justify-center items-center">
              {/* <Image alt="briefcase" width="50" height="50" src={briefcase} /> */}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-stone-400 text-xs">SALES</p>
              <span className="font-bold text-slate-50 text-2xl">Number</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-800 py-2 px-2 w-72 rounded-lg border border-slate-700 h-28">
            <div className="rounded-full bg-purple-600 h-20 w-20 flex justify-center items-center">
              {/* <Image alt="briefcase" width="50" height="50" src={briefcase} /> */}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-stone-400 text-xs">CHECK INS</p>
              <span className="font-bold text-slate-50 text-2xl">Number</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-800 py-2 px-2 w-72 rounded-lg border border-slate-700 h-28">
            <div className="rounded-full bg-orange-400 h-20 w-20 flex justify-center items-center">
              {/* <Image alt="briefcase" width="50" height="50" src={briefcase} /> */}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-stone-400 text-xs">OCCUPANCY RATE</p>
              <span className="font-bold text-slate-50 text-2xl">Number</span>
            </div>
          </div>
          <div className="col-span-2 row-span-3">
            <Table data={data} />
          </div>
          <div className="col-span-2 row-span-3">
            <DonutBar />
          </div>
          <div className="col-span-4 row-span-3 px-3 py-3 border rounded-lg dark:bg-slate-800 dark:border-slate-700">
            <Graph />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

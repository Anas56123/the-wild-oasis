"use client";
import { getCabins } from "@/Data/GET/Cabins/getCabins";
import ClientOnly from "@/utils/ClientOnly";
import { useEffect, useState } from "react";

type BtnBg = "" | "btn-1" | "btn-2" | "btn-3";

export default function Home() {
  const [bg, setBg] = useState<BtnBg>("");
  const [bgClick, setBgClick] = useState<BtnBg>("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const fd: any = await getCabins();
      setData(fd);
    }
    getData();
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
      <div>
        <div className="flex justify-between items-center w-50">
          <h1 className="text-4xl font-bold dark:text-slate-50">All cabins</h1>
          <div className="border-slate-800 border-2 bg-wihte w-80 rounded flex justify-between px-1 dark:bg-slate-900">
            <button
              onClick={() => handleClick("btn-1")}
              onMouseEnter={() => handleMouseEnter("btn-1")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-1" || bgClick == "btn-1" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-1" ? "border-slate-400 border" : ""}`}
            >
              All
            </button>
            <button
              onClick={() => handleClick("btn-2")}
              onMouseEnter={() => handleMouseEnter("btn-2")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-2" || bgClick == "btn-2" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-2" ? "border-slate-400 border" : ""}`}
            >
              With discount
            </button>
            <button
              onClick={() => handleClick("btn-3")}
              onMouseEnter={() => handleMouseEnter("btn-3")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-3" || bgClick == "btn-3" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-3" ? "border-slate-400 border" : ""}`}
            >
              Without discount
            </button>
          </div>
        </div>
        <div>
          {data?.map((cabin, index) => (
            <div className="dark:text-slate-50 bg-slate-700" key={index}>
              {JSON.stringify(cabin)}
            </div>
          ))}
        </div>
      </div>
    </ClientOnly>
  );
}

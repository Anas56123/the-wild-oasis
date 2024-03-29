"use client";
import { getCabins } from "@/Data/GET/Cabins/getCabins";
import ClientOnly from "@/utils/ClientOnly";
import Image from "next/image";
import { useEffect, useState } from "react";

type BtnBg = "" | "btn-1" | "btn-2" | "btn-3";

type CabinData = {
  id: number | null;
  created_at: string | null;
  name: string | null;
  maxCapacity: number | null;
  regularPrice: number | null;
  discount: number | null;
  description: string | null;
  imageURL: string;
};

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
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-3/5 flex flex-col">
          <div className="flex justify-between items-center w-50">
            <h1 className="text-4xl font-bold dark:text-slate-50">
              All cabins
            </h1>
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
          <div className="flex flex-col justify-around bg-slate-800">
            <br />
            <div className="dark:text-slate-50 w-30 bg-slate-700 flex justify-around">
              <h1 className="text-slate-50 font-bold">Name</h1>
              <h1 className="text-slate-50 font-bold">Cabin Image</h1>
              <h1 className="text-slate-50 font-bold">Max Capacity</h1>
              <h1 className="text-slate-50 font-bold">Regular Price</h1>
              <h1 className="text-slate-50 font-bold">Discount</h1>
            </div>
            <br />
            <hr />
            <br />
            {data?.map((cabin: CabinData, index: number) => (
              <>
                <div
                  className="dark:text-slate-50 bg-slate-800 flex justify-around"
                  key={index}
                >
                  <p className="text-slate-50 font-bold">{cabin?.name}</p>
                  <Image
                    className="w-30 h-30"
                    width={150}
                    height={150}
                    src={cabin?.imageURL}
                    alt="cabin photo"
                  />
                  <p className="text-slate-50 font-bold">
                    {cabin?.maxCapacity}
                  </p>
                  <p className="text-slate-50 font-bold">
                    {cabin?.regularPrice}
                  </p>
                  <p className="text-slate-50 font-bold">{cabin?.discount}</p>
                </div>
                <br />
                <hr />
                <br />
              </>
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

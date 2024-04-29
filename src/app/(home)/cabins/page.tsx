"use client";
import Table from "@/Components/CabinsTable";
import { getCabins } from "@/Data/GET/getCabins";
import { getCabinsWithDiscount } from "@/Data/GET/getCabinsWithDiscount";
import { getCabinsWithoutDiscount } from "@/Data/GET/getCabinsWithoutDiscount";
import ClientOnly from "@/utils/ClientOnly";
import { useEffect, useState } from "react";

type BtnBg = "" | "btn-1" | "btn-2" | "btn-3";

const Home = () => {
  const [data, setData] = useState([]);
  const [dataWithDiscount, setDataWithDiscount] = useState([]);
  const [dataWithoutDiscount, setDataWithoutDiscount] = useState([]);
  const [bg, setBg] = useState<BtnBg>("btn-1");
  const [bgClick, setBgClick] = useState<BtnBg>("btn-1");

  useEffect(() => {
    async function getData() {
      const fd: any = await getCabins();
      setData(fd);
    }
    async function getDataWithDiscount() {
      const fd: any = await getCabinsWithDiscount();
      setDataWithDiscount(fd);
    }
    async function getDataWithoutDiscount() {
      const fd: any = await getCabinsWithoutDiscount();
      setDataWithoutDiscount(fd);
    }
    getData();
    getDataWithDiscount();
    getDataWithoutDiscount();
  }, [bgClick]);

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
      <div className="flex flex-col items-center font-bold dark:text-slate-50">
        <br />
        <div className="w-5/6 flex justify-between items-center">
          <h1 className="text-4xl">All cabins</h1>
          <div className="border-slate-800 border-2 bg-wihte w-80 rounded flex justify-between px-1 dark:bg-slate-800">
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
        <br />
        <Table
          data={
            bgClick == "btn-1"
              ? data
              : bgClick == "btn-3"
                ? dataWithDiscount
                : bgClick == "btn-2"
                  ? dataWithoutDiscount
                  : []
          }
        />
      </div>
    </ClientOnly>
  );
};

export default Home;

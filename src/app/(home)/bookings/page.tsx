"use client";
import Table from "@/Components/BookingTable";

import { getBookings } from "@/Data/GET/getBookings";
import { getBookingsCI } from "@/Data/GET/getBookingsCI";
import { getBookingsCO } from "@/Data/GET/getBookingsCO";
import { getBookingsUn } from "@/Data/GET/getBookingsUn";
import ClientOnly from "@/utils/ClientOnly";
import { useEffect, useState } from "react";

type BtnBg = "" | "btn-1" | "btn-2" | "btn-3" | "btn-4";

const Home = () => {
  const [data, setData] = useState([]);
  const [dataUn, setDataUn] = useState([]);
  const [dataCI, setDataCI] = useState([]);
  const [dataCO, setDataCO] = useState([]);
  const [bg, setBg] = useState<BtnBg>("");
  const [bgClick, setBgClick] = useState<BtnBg>("btn-1");

  useEffect(() => {
    async function getData() {
      const fd: any = await getBookings();
      setData(fd);
    }
    async function getDataUn() {
      const fd: any = await getBookingsUn();
      setDataUn(fd);
    }
    async function getDataCI() {
      const fd: any = await getBookingsCI();
      setDataCI(fd);
    }
    async function getDataCO() {
      const fd: any = await getBookingsCO();
      setDataCO(fd);
    }
    getData();
    getDataUn();
    getDataCI();
    getDataCO();
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
      <div className="flex flex-col items-center font-bold">
        <br />
        <div className="w-5/6 flex justify-between items-center">
          <h1 className="text-4xl">All bookings</h1>
          <div className="border-slate-800 border-2 bg-wihte w-96 rounded flex justify-between px-1 dark:bg-slate-900">
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
              Checked out
            </button>
            <button
              onClick={() => handleClick("btn-3")}
              onMouseEnter={() => handleMouseEnter("btn-3")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-3" || bgClick == "btn-3" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-3" ? "border-slate-400 border" : ""}`}
            >
              Checked in
            </button>
            <button
              onClick={() => handleClick("btn-4")}
              onMouseEnter={() => handleMouseEnter("btn-4")}
              onMouseLeave={() => handleMouseLeave()}
              className={`rounded px-1 dark:text-slate-50 ${
                bg == "btn-4" || bgClick == "btn-4" ? "bg-indigo-500" : ""
              } ${bgClick == "btn-4" ? "border-slate-400 border" : ""}`}
            >
              Unconfirmed
            </button>
          </div>
        </div>
        <br />
        <Table
          data={
            bgClick == "btn-1"
              ? data
              : bgClick == "btn-4"
                ? dataUn
                : bgClick == "btn-3"
                  ? dataCI
                  : bgClick == "btn-2"
                    ? dataCO
                    : []
          }
        />
      </div>
    </ClientOnly>
  );
};

export default Home;

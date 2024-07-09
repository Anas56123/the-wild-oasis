"use client";
import Table from "@/Components/BookingTable";
import { getBookingsWithGuestsData } from "@/Data/GET/getBookingsWithGuestsData";
import { useEffect, useState } from "react";

export let ItemPerPage = 10;

type statusValues = "" | "unconfirmed" | "check in" | "check out";

const Home = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState<statusValues>("");
  const [pageNum, setPageNum] = useState<number>(1);

  const statusOptions: { value: statusValues; label: string }[] = [
    { value: "", label: "All" },
    { value: "unconfirmed", label: "Unconfirmed" },
    { value: "check in", label: "Check-in" },
    { value: "check out", label: "Check-out" },
  ];
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function getData() {
      const fd: any = await getBookingsWithGuestsData(status, getFromAndTo);
      setData(fd.data);
      setCount(fd.count);
    }
    getData();
  }, [status, pageNum]);

  function handleClickStatus(state: statusValues) {
    setStatus(state);
    setPageNum(1);
  }

  function getFromAndTo() {
    let from = (pageNum - 1) * ItemPerPage;
    let to = from + ItemPerPage - 1;

    return { from, to };
  }
  console.log(getFromAndTo(), count);
  return (
    <>
      <div className="transition-colors duration-300 flex flex-col items-center dark:text-slate-50">
        <br />
        <div className="transition-colors duration-300 w-9/12 flex justify-between items-center">
          <h1 className="transition-colors duration-300 text-3xl font-bold">
            All bookings
          </h1>

          <div className="transition-colors duration-300 border-slate-50 dark:border-slate-800 border bg-wihte w-96 rounded flex justify-between px-1 bg-white dark:bg-[#18212f]">
            {statusOptions.map((statusOP, index) => (
              <button
                onClick={() => handleClickStatus(statusOP.value)}
                key={index}
                className={`transition-colors duration-300 rounded px-1 py-1 dark:text-slate-50 hover:bg-indigo-400 ${status == statusOP.value ? "bg-indigo-500" : ""}`}
              >
                {statusOP.label}
              </button>
            ))}
          </div>
        </div>
        <br />
        <Table
          data={data}
          setPageNum={setPageNum}
          pageNum={pageNum}
          dataLength={count}
          getFromAndTo={getFromAndTo}
        />
      </div>
    </>
  );
};

export default Home;

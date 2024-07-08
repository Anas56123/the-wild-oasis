"use client";
import Table from "@/Components/CabinsTable";
import { getCabins } from "@/Data/GET/getCabins";
import ClientOnly from "@/utils/ClientOnly";
import { useEffect, useState } from "react";

type WOrWOOptions = "all" | "number" | null;

const Home = () => {
  const [data, setData] = useState([]);
  const options: { label: string; value: WOrWOOptions }[] = [
    { label: "All", value: "all" },
    { label: "With discont", value: null },
    { label: "Without discount", value: "number" },
  ];
  const [wOrWO, setWOrWO] = useState<WOrWOOptions>("all");

  useEffect(() => {
    async function getData() {
      const fd: any = await getCabins(wOrWO);
      setData(fd);
    }
    getData();
  }, [wOrWO]);

  function handleClickStatus(value: WOrWOOptions) {
    setWOrWO(value);
  }

  return (
    <ClientOnly>
      <div className="transition-colors duration-300 flex flex-col items-center dark:text-slate-50">
        <br />
        <div className="transition-colors duration-300 w-5/6 flex justify-between items-center">
          <h1 className="transition-colors duration-300 text-4xl font-bold">
            All cabins
          </h1>
          <div className="transition-colors duration-300 border-slate-50 dark:border-slate-800 border bg-wihte w-80 rounded flex justify-between px-1 bg-white dark:bg-[#18212f]">
            {options.map((option, index) => (
              <button
                onClick={() => handleClickStatus(option.value)}
                className={`transition-colors duration-300 rounded px-1 dark:text-slate-50 hover:bg-indigo-500 ${
                  wOrWO == option.value ? "bg-indigo-500" : ""
                }`}
                key={index}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <br />
        <Table data={data} />
      </div>
    </ClientOnly>
  );
};

export default Home;

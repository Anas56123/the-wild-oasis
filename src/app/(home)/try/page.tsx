'use client'
import { getBookingsWithGuestsData } from "@/Data/GET/getBookingsWithGuestsData";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
   async function name() {
    const fd = await getBookingsWithGuestsData();
    setData(fd);
   }
   name()
  }, []);
  return (
    <>
      <div className="dark:text-white">{JSON.stringify(data)}</div>
    </>
  );
}

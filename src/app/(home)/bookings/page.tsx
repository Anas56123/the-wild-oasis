"use client";
import { getBookings } from "@/Data/GET/Bookings/getBookings";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const fd: any = await getBookings();
      setData(fd);
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold dark:text-slate-50">Bookings</h1>
    </div>
  );
}

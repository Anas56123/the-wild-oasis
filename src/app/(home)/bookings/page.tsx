"use client";
import { getBookings } from "@/Data/GET/Bookings/getBookings";
import { useEffect, useState } from "react";

type BookingsData = {
  id: number | null;
  created_at: string | null;
  startDate: string | null;
  endDate: string | null;
  cabinPrice: number | null;
  extraPrice: number | null;
  totalPrice: number | null;
  status: string | null;
  hadBreakfast: boolean | null;
  hadPaid: boolean | null;
  observation: string | null;
  cabinID: number | null;
  guestsID: number | null;
};

export default function Home() {
  const [data, setData] = useState([]);

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
      <div>
        {data?.map((booking: BookingsData, index: number) => (
          <div className="dark:text-slate-50 bg-slate-700" key={index}>
            <p>id = {booking?.id}</p>
            <p>created_at = {booking?.created_at}</p>
            <p>startDate = {booking?.startDate}</p>
            <p>endDate = {booking?.endDate}</p>
            <p>cabinPrice = {booking?.cabinPrice}</p>
            <p>extraPrice = {booking?.extraPrice}</p>
            <p>totalPrice = {booking?.totalPrice}</p>
            <p>status = {booking?.status}</p>
            <p>hadBreakfast = {JSON.stringify(booking?.hadBreakfast)}</p>
            <p>hadPaid = {JSON.stringify(booking?.hadPaid)}</p>
            <p>cabinID = {booking?.cabinID}</p>
            <p>guestsID = {booking?.guestsID}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

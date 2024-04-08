"use client";
import { getBookings } from "@/Data/GET/getBookings";
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

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const fd: any = await getBookings();
      setData(fd);
      console.log("Data: ", data);
    }
    getData();
  }, [])

  return (
    <div>
      <table className="border border-solid border-slate-900 dark:border-slate-50">
        <tr>
          <th className="border-y border-solid border-slate-900 dark:border-slate-50">
            CABIN
          </th>
          <th className="border-y border-solid border-slate-900 dark:border-slate-50">
            GEUST
          </th>
          <th className="border-y border-solid border-slate-900 dark:border-slate-50">
            DATES
          </th>
          <th className="border-y border-solid border-slate-900 dark:border-slate-50">
            STATUS
          </th>
          <th className="border-y border-solid border-slate-900 dark:border-slate-50">
            AMOUNT
          </th>
        </tr>
        {data?.map((booking: BookingsData, index) => <tr key={index}>
            <td className="border border-solid border-slate-900 dark:border-slate-50">
                {booking.cabinID}
            </td>
            <td className="border border-solid border-slate-900 dark:border-slate-50">
                {booking.guestsID}
            </td>
            <td className="border border-solid border-slate-900 dark:border-slate-50">
                {JSON.stringify(booking.startDate)} to {JSON.stringify(booking.endDate)}
            </td>
            <td className="border border-solid border-slate-900 dark:border-slate-50">
                {booking.status}
            </td>
            <td className="border border-solid border-slate-900 dark:border-slate-50">
                {booking.totalPrice}
            </td>
        </tr>)}
      </table>
    </div>
  );
};

export default Table;

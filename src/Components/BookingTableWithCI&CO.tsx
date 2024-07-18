"use client";
import LoadingSpinner from "./LoadingSpinner";
import { getGuestsByID } from "@/Data/GET/getGuestsByID";
import Image from "next/image";
import { useQueries } from "react-query";

interface TableProps {
  data: {
    id: string;
    guestsID: number;
    startDate: string;
    endDate: string;
    numNights: number;
    status: string;
    totalPrice: number;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const userQueries: any = useQueries(
    data?.map((item) => {
      return {
        queryKey: ["item", item.guestsID],
        queryFn: () => getGuestsByID(item.guestsID),
      };
    })
  );

  const newData = data.map((item) => ({
    ...item,
    countryFlag: userQueries?.find(
      (element: any) => (element as any)?.data?.[0]?.id === item?.guestsID
    )?.data?.[0]?.countryFlag,
    full_name: userQueries?.find(
      (element: any) => (element as any)?.data?.[0]?.id === item?.guestsID
    )?.data?.[0]?.full_name,
  }));
  console.log(newData);

  return (
    <>
      <table className="transition-colors duration-300 w-11/12 rounded-lg divide-y divide-slate-200 dark:divide-slate-700 dark:text-slate-50">
        <tbody className="transition-colors duration-300 bg-white dark:bg-[#18212f] divide-y divide-slate-200 dark:divide-slate-800">
          {newData?.map((item) => {
            return (
              <tr key={item.id}>
                <td
                  className={`transition-colors duration-300 px-6 py-2 w-16 whitespace-nowrap`}
                >
                  <mark
                    className={`transition-colors duration-300 dark:text-slate-50 font-semibold text-xs px-2 py-1 rounded-full ${
                      item.status == "check in"
                        ? "dark:bg-sky-800 bg-sky-100 text-sky-800"
                        : item.status == "check out"
                          ? "dark:bg-green-700 bg-green-100 text-green-700"
                          : item.status == "unconfirmed"
                            ? "dark:bg-gray-500 bg-gray-100 text-gray-500"
                            : ""
                    }`}
                  >
                    {item.status == "check in" ? "DEPARTING" : "ARRIVING"}
                  </mark>
                </td>
                <td className="transition-colors duration-300 py-1">
                  <Image
                    className="rounded-sm"
                    src={item.countryFlag}
                    alt="contry"
                    width={25}
                    height={25}
                  />
                </td>
                <td className="transition-colors duration-300 py-1">
                  {item.full_name}
                </td>
                <td className="transition-colors duration-300 px-6 py-1 whitespace-nowrap">
                  {item.numNights}
                </td>
                <button className="transition-colors duration-300 dark:text-slate-50 rounded w-30 px-2 py-1 bg-slate-50 dark:bg-[#1f2937] border border-slate-100 dark:border-slate-600">
                  {item.status == "check in" ? "CHECK OUT" : "CHECK IN"}
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className="transition-colors duration-300 flex w-full justify-center items-center">
        {data ? "" : <LoadingSpinner />}
      </div>
    </>
  );
};

export default Table;

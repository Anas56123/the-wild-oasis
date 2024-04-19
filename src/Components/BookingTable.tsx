import LoadingSpinner from "./LoadingSpinner";

interface TableProps {
  data: {
    id: string;
    cabinID: number;
    guestsID: number;
    startDate: string;
    endDate: string;
    status: string;
    totalPrice: number;
  }[];
}

type statusForm = "unconfirmed" | "checked out" | "checked in" | "";

const Table: React.FC<TableProps> = ({ data }) => {
  let statusBG: statusForm = "";
  const date = new Date().getMonth() + 1;

  return (
    <>
      <table className="w-5/6 border rounded-lg divide-y divide-slate-200 dark:divide-slate-700 border-slate-200 dark:border-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-900">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider rounded-tl rounded-tr"
            >
              Cabins
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider"
            >
              Guests
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider"
            >
              Dates
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider rounded-tr"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
          {data?.map((item) => {
            item.status == "unconfirmed"
              ? (statusBG = "unconfirmed")
              : item.status == "checked in"
                ? statusBG == "checked in"
                : item.status == "checked out"
                  ? statusBG == "checked out"
                  : "";
                  let endDateSplit = item.endDate.split("");
                  let endDate = Number(endDateSplit[5] + endDateSplit[6])
                  let howMuchAgo = endDate - date == -1 ? String(endDate - date + 12) : endDate - date == 0 ? "now" : endDate - date
            return (
              <tr key={item.id}>
                <td className="px-6 py-6 whitespace-nowrap rounded-bl">
                  {item.cabinID}
                </td>
                <td className="px-6 py-46 whitespace-nowrap">
                  {item.guestsID}
                </td>
                <td className="px-6 py-6 whitespace-nowrap">
                   {howMuchAgo} ago
                </td>
                <td className={`px-6 py-6 whitespace-nowrap`}>
                  <mark
                    className={`text-slate-50 text-normal px-1 rounded-full ${
                      item.status == "unconfirmed"
                        ? "bg-sky-500"
                        : item.status == "check in"
                          ? "bg-green-600"
                          : item.status == "check out"
                            ? "bg-gray-400"
                            : ""
                    }`}
                  >
                    {item.status}
                  </mark>
                </td>
                <td className="px-6 py-6 whitespace-nowrap rounded-br">
                  {item.totalPrice}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className="flex w-full justify-center items-center">
        {data ? "" : <LoadingSpinner />}
      </div>
    </>
  );
};

export default Table;

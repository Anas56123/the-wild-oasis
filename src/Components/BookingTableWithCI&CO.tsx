import LoadingSpinner from "./LoadingSpinner";

interface TableProps {
  data: {
    id: string;
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
      <table className="transition-colors duration-300 w-11/12 rounded-lg divide-y divide-slate-200 dark:divide-slate-700 dark:text-slate-50">
        <tbody className="transition-colors duration-300 bg-white dark:bg-[#18212f] divide-y divide-slate-200 dark:divide-slate-700">
          {data?.map((item) => {
            item.status == "unconfirmed"
              ? (statusBG = "unconfirmed")
              : item.status == "checked in"
                ? statusBG == "checked in"
                : item.status == "checked out"
                  ? statusBG == "checked out"
                  : "";
            let endDateSplit = item.endDate.split("");
            let endDate = Number(endDateSplit[5] + endDateSplit[6]);
            let howMuchAgo =
              endDate - date < 0
                ? String(endDate - date + 12) + " month ago"
                : endDate - date == 0
                  ? "now"
                  : endDate - date + " month ago";
            return (
              <tr key={item.id}>
                <td className="transition-colors duration-300 px-6 py-1 whitespace-nowrap">
                  {item.guestsID}
                </td>
                <td className="transition-colors duration-300 px-6 py-1 whitespace-nowrap">
                  {howMuchAgo}
                </td>
                <td
                  className={`transition-colors duration-300 px-6 py-2 whitespace-nowrap`}
                >
                  <mark
                    className={`transition-colors duration-300  dark:text-slate-50 font-semibold text-xs px-2 py-1 rounded-full ${
                      item.status == "unconfirmed"
                        ? "dark:bg-sky-800 bg-sky-100 text-sky-800"
                        : item.status == "check in"
                          ? "dark:bg-green-700 bg-green-100 text-green-700"
                          : item.status == "check out"
                            ? "dark:bg-gray-500 bg-gray-100 text-gray-500"
                            : ""
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </mark>
                </td>
                <td className="transition-colors duration-300 px-6 py-1 whitespace-nowrap rounded-br">
                  {item.totalPrice}
                </td>
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

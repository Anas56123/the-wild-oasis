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
      <table className="transition-colors duration-1000 w-11/12 rounded-lg divide-y divide-slate-200 dark:divide-slate-700 dark:text-slate-50">
        <tbody className="transition-colors duration-1000 bg-slate-50 dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
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
                <td className="transition-colors duration-1000 px-6 py-1 whitespace-nowrap rounded-bl">
                  {item.cabinID}
                </td>
                <td className="transition-colors duration-1000 px-6 py-1 whitespace-nowrap">
                  {item.guestsID}
                </td>
                <td className="transition-colors duration-1000 px-6 py-1 whitespace-nowrap">
                  {howMuchAgo}
                </td>
                <td
                  className={`transition-colors duration-1000 px-6 py-2 whitespace-nowrap`}
                >
                  <mark
                    className={`transition-colors duration-1000 text-slate-50 font-semibold text-xs px-2 py-1 rounded-full ${
                      item.status == "unconfirmed"
                        ? "bg-sky-800"
                        : item.status == "check in"
                          ? "bg-green-700"
                          : item.status == "check out"
                            ? "bg-gray-500"
                            : ""
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </mark>
                </td>
                <td className="transition-colors duration-1000 px-6 py-1 whitespace-nowrap rounded-br">
                  {item.totalPrice}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className="transition-colors duration-1000 flex w-full justify-center items-center">
        {data ? "" : <LoadingSpinner />}
      </div>
    </>
  );
};

export default Table;

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

  return (
    <table className="min-w-5/6 border rounded-lg divide-y divide-slate-200 dark:divide-slate-700 border-slate-200 dark:border-slate-700">
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
                : '';
          return (
            <tr key={item.id}>
              <td className="px-6 py-6 whitespace-nowrap rounded-bl">
                {item.cabinID}
              </td>
              <td className="px-6 py-46whitespace-nowrap">{item.guestsID}</td>
              <td className="px-6 py-6 whitespace-nowrap">
                {item.startDate} to {item.endDate}
              </td>
              <td className="px-6 py-6 whitespace-nowrap">{item.status}</td>
              <td className="px-6 py-6 whitespace-nowrap rounded-br">
                {item.totalPrice}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

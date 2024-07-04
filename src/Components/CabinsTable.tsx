import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";
import Dots from "@/../public/dots-vertical-svgrepo-com (1).svg";

interface TableProps {
  data: {
    id: string;
    imageURL: string;
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number | null;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <>
      {/* <table className="transition-colors duration-300 w-5/6 border rounded-lg divide-y divide-slate-200 dark:divide-slate-700 border-slate-200 dark:border-[#1f2937] border-[#f3f4f6]">
        <thead className="transition-colors duration-300 bg-white dark:bg-slate-900">
          <tr>
            <th
              scope="col"
              className="transition-colors duration-300 px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider rounded-tl rounded-tr"
            ></th>
            <th
              scope="col"
              className="transition-colors duration-300 px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider rounded-tl rounded-tr"
            >
              Cabin
            </th>
            <th
              scope="col"
              className="transition-colors duration-300 px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider"
            >
              Capacity
            </th>
            <th
              scope="col"
              className="transition-colors duration-300 px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="transition-colors duration-300 px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider"
            >
              Discount
            </th>
            <th
              scope="col"
              className="transition-colors duration-300 px-6 py-3 text-left text-sm text-slate-500 dark:text-slate-50 uppercase tracking-wider rounded-tr"
            ></th>
          </tr>
        </thead>
        <tbody className="transition-colors duration-300 bg-white dark:bg-[#18212f] divide-y divide-slate-200 dark:divide-slate-700">
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="transition-colors duration-300 px-6 py-6 whitespace-nowrap rounded-bl">
                  <Image
                    src={item.imageURL}
                    alt={"cabin image"}
                    width={150}
                    height={150}
                  />
                </td>
                <td className="transition-colors duration-300 px-6 py-46 whitespace-nowrap">
                  {item.name}
                </td>
                <td className="transition-colors duration-300 px-6 py-6 whitespace-nowrap">
                  {item.maxCapacity}
                </td>
                <td
                  className={`transition-colors duration-300 px-6 py-6 whitespace-nowrap`}
                >
                  {item.regularPrice}
                </td>
                <td
                  className={`transition-colors duration-300 px-6 py-6 whitespace-nowrap ${item.discount == null ? "" : "text-green-200"}`}
                >
                  {item.discount == null ? "-" : item.discount}
                </td>
                <td className="transition-colors duration-300 px-6 py-6 whitespace-nowrap rounded-br">
                  <button>...</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br /> */}
      <div
        className="w-9/12 transition-colors duration-300 border divide-slate-200 dark:divide-slate-700
        dark:border-[#444952] border-[#f3f4f6] rounded-xl text-sm"
      >
        <header className="transition-colors duration-300 bg-white dark:bg-[#111827] flex justify-between w-full px-6 py-3">
          <div className="w-16">CABIN</div>
          <div className="w-56">GUESTS</div>
          <div className="w-56">DATES</div>
          <div className="w-24">STATUS</div>
          <div className="w-24">AMOUNT</div>
          <div className="w-16">OPTIONS</div>
        </header>
        <hr />
        <section className="divide-[#1f2937] divide-y bg-[#18212f]">
          {data?.map((item: any) => (
            <div
              className="flex justify-between items-center w-full px-6 py-3"
              key={item.id}
            >
              <Image src={item.imageURL} alt="cabin" width={64} height={64}/>
              <div className="w-56">{item.maxCapacity}</div>
              <div className="w-56">{item.regularPrice}</div>
              <div className="w-24">
                {item.discount == null ? "-" : item.discount}
              </div>
              <div className="w-24">{item.totalPrice}</div>
              <Image className="w-16 h-8 font-bold dark:text-white dark:dots dot flex justify-center" src={Dots} alt="dots"/>
            </div>
          ))}
        </section>
      </div>
      <div className="transition-colors duration-300 flex w-full justify-center items-center">
        {data ? "" : <LoadingSpinner />}
      </div>
    </>
  );
};

export default Table;

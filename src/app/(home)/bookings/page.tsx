"use client";
import Table from "@/Components/Table";
import { getBookings } from "@/Data/GET/getBookings";
import ClientOnly from "@/utils/ClientOnly";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const fd: any = await getBookings();
      setData(fd);
      console.log("Data: ", data);
    }
    getData();
  }, []);

  return (
    <ClientOnly>
      <div className="flex flex-col items-center font-bold">
        <h1 className="text-4xl">All bookings</h1>
        <br />
        <Table data={data} />
      </div>
    </ClientOnly>
  );
};

export default Home;

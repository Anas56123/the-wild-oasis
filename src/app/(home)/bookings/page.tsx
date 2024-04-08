"use client"
import Table from "@/Components/Table";
import { getBookings } from "@/Data/GET/getBookings";
import ClientOnly from "@/utils/ClientOnly";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <ClientOnly>
      <div>
        <h1 className="text-4xl">Bookings</h1>
        <Table />
      </div>
    </ClientOnly>
  );
};

export default Home;

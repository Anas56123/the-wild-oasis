"use client";
import ClientOnly from "@/utils/ClientOnly";
import React, { useState } from "react";

type FormData = {
  minN: number;
  maxN: number;
  maxG: number;
  bp: number;
};

const Home = () => {
  const [formData, setFormData] = useState<FormData>({
    minN: 5,
    maxN: 90,
    maxG: 8,
    bp: 15,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <ClientOnly>
      <div className="transition-colors duration-300 flex w-full h-screen items-start flex-col dark:text-slate-50">
        <br />
        <h1 className="transition-colors duration-300 text-4xl ml-5 font-bold">
          Update hotel settings
        </h1>
        <br />
        <form className="transition-colors duration-300 w-2/3 ml-5 bg-white dark:bg-[#18212f] px-10 py-10 rounded-md">
          <div className="transition-colors duration-300 flex justify-between w-full">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-sl">
              Minimum nights/booking :
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="number"
              name="minN"
              value={formData.minN}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
          <br />
          <div className="transition-colors duration-300 flex justify-between w-full">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-sl">
              Maximum nights/booking :
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="number"
              name="maxN"
              value={formData.maxN}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
          <br />
          <div className="transition-colors duration-300 flex justify-between w-full">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-sl">
              Maximum guests/booking :
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="number"
              name="maxG"
              value={formData.maxG}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
          <br />
          <div className="transition-colors duration-300 flex justify-between w-full">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-sl">
              Breakfast price :
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="text"
              name="bp"
              value={formData.bp}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
        </form>
      </div>
    </ClientOnly>
  );
};

export default Home;

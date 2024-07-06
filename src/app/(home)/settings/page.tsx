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
      <div className="h-3/5 w-less-screen-me flex justify-center items-center">
        <div className="transition-colors duration-300 flex h-full w-5/6 items-start flex-col dark:text-slate-50">
          <br />
          <h1 className="transition-colors duration-300 text-3xl ml-5 font-bold">
            Update hotel settings
          </h1>
          <br />
          <form className="transition-colors duration-300 w-full bg-white dark:bg-[#18212f] px-10 py-5 rounded-md">
            <div className="transition-colors duration-300 flex justify-between w-full items-center">
              <label className="transition-colors duration-300 font-bold text-sl">
                Minimum nights/booking :
              </label>
              <input
                className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f] my-3"
                type="number"
                name="minN"
                value={formData.minN}
                onChange={handleChange}
                required
              />
            </div>
            <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
            <div className="transition-colors duration-300 flex justify-between w-full items-center">
              <label className="transition-colors duration-300 font-bold text-lg dark:text-sl">
                Maximum nights/booking :
              </label>
              <input
                className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f] my-3"
                type="number"
                name="maxN"
                value={formData.maxN}
                onChange={handleChange}
                required
              />
            </div>
            <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
            <div className="transition-colors duration-300 flex justify-between w-full items-center">
              <label className="transition-colors duration-300 font-bold text-lg dark:text-sl">
                Maximum guests/booking :
              </label>
              <input
                className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f] my-3"
                type="number"
                name="maxG"
                value={formData.maxG}
                onChange={handleChange}
                required
              />
            </div>
            <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
            <div className="transition-colors duration-300 flex justify-between w-full items-center">
              <label className="transition-colors duration-300 font-bold text-lg dark:text-sl">
                Breakfast price :
              </label>
              <input
                className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f] my-3"
                type="text"
                name="bp"
                value={formData.bp}
                onChange={handleChange}
                required
              />
            </div>
            <hr className="transition-colors duration-300 dark:border-[#1f2937] border-[#f3f4f6]" />
          </form>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Home;

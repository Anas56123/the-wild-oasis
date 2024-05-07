"use client";
import { insertAccount } from "@/Data/INSERT/insertAccoount";
import ClientOnly from "@/utils/ClientOnly";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";

type FormData = {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
};

const Home = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const firstDigit = formData.phoneNumber.charAt(0);
    if (formData.phoneNumber.length !== 8) {
      console.log(formData.phoneNumber.length);
      setError("The phone number must be 8 digits");
      return;
    }
    if (!["9", "5", "4", "2"].includes(firstDigit)) {
      setError("The phone number must start with 2, 3, 5 or 9");
      return;
    }
    if (formData.password.length < 8) {
      setError("The password must be at least 8 charaters");
      return;
    }
    if (formData.userName.length < 3) {
      setError("The user name must be at least 3 charaters");
      return;
    }
    setError("");
    console.log("FormData: ", formData);
    async function getData() {
      await insertAccount(formData);
      localStorage.setItem("accountEmail", formData.email);
      if (localStorage.getItem("accountEmail")) {
        router.push("/dashboard");
      }
    }
    getData();
  };

  return (
    <ClientOnly>
      <div className="transition-colors duration-500 flex w-full h-screen items-start flex-col dark:text-slate-50">
        <br />
        <h1 className="transition-colors duration-500 text-4xl ml-5 font-bold">
          Create a new user
        </h1>
        <br />
        <form
          onSubmit={handleSubmit}
          className="transition-colors duration-500 w-2/3 ml-5 bg-slate-50 dark:bg-[#18212f] px-10 py-10 rounded-md"
        >
          <div className="transition-colors duration-500 flex justify-between w-full">
            <label className="transition-colors duration-500 font-bold text-lg dark:text-sl">
              Email:
            </label>
            <input
              className="transition-colors duration-500 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-50 dark:bg-[#18212f]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-500 dark:border-[#1f2937]" />
          <br />
          <div className="transition-colors duration-500 flex justify-between w-full">
            <label className="transition-colors duration-500 font-bold text-lg dark:text-sl">
              User name:
            </label>
            <input
              className="transition-colors duration-500 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-50 dark:bg-[#18212f]"
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-500 dark:border-[#1f2937]" />
          <br />
          <div className="transition-colors duration-500 flex justify-between w-full">
            <label className="transition-colors duration-500 font-bold text-lg dark:text-sl">
              Password:
            </label>
            <input
              className="transition-colors duration-500 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-50 dark:bg-[#18212f]"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-500 dark:border-[#1f2937]" />
          <br />
          <div className="transition-colors duration-500 flex justify-between w-full">
            <label className="transition-colors duration-500 font-bold text-lg dark:text-sl">
              Phone number:
            </label>
            <input
              className="transition-colors duration-500 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-50 dark:bg-[#18212f]"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr className="transition-colors duration-500 dark:border-[#1f2937]" />
          <br />
          <div className="transition-colors duration-500 flex justify-end w-full">
            <button
              className="transition-colors duration-500 dark:text-slate-50 px-3 rounded w-72 h-10 bg-slate-100 dark:bg-[#1f2937] border border-slate-100 dark:border-slate-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <br />
        <p className="transition-colors duration-500 text-red-500 font-bold">
          {error}
        </p>
      </div>
    </ClientOnly>
  );
};

export default Home;

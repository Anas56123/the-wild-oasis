"use client";
import { getAccountByEmail } from "@/Data/GET/getAccountByEmail";
import { insertAccount } from "@/Data/INSERT/insertAccount";
import { FormEventHandler, useState } from "react";

type FormData = {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
  });
  const [error, setError] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const phoneNumAsArray = formData.phoneNumber.split('');
    if (!formData) return;
    if (formData.phoneNumber.length == 8) return;
    if (phoneNumAsArray[0] != '2' || '3' || '5' || '9') return;
    if (formData.password.length > 8) return;
    if (formData.userName.length > 3) return;
    console.log("FormData: ", formData);
    async function getData() {
      await insertAccount(formData);
    }
    getData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-5/6 w-2/6 rounded-xl flex justify-center items-center flex-col bg-slate-50 dark:bg-slate-900 px-20">
        <h1 className="text-4xl font-bold dark:text-slate-50">Sign up</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center flex-col">
            <label className="font-bold text-lg dark:text-slate-50">
              Email:
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex justify-center flex-col">
            <label className="font-bold text-lg dark:text-slate-50">
              User name:
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex justify-center flex-col">
            <label className="font-bold text-lg dark:text-slate-50">
              Password:
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex justify-center flex-col">
            <label className="font-bold text-lg dark:text-slate-50">
              Phone number:
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <br />
          <button
            className="dark:text-slate-50 px-3 rounded w-72 h-10 bg-slate-100 dark:bg-slate-700 border-2 border-slate-100 dark:border-slate-600"
            type="submit"
          >
            Submit
          </button>
        </form>
        <br />
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    </div>
  );
}

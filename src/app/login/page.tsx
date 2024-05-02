"use client";
import { getAccountByEmail } from "@/Data/GET/getAccountsByEmail";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("FormData: ", formData);
    async function getData() {
      const fd: any = await getAccountByEmail(formData.email);
      setData(fd);
      console.log("Data: ", data);
      localStorage.setItem("accountEmail", formData.email);
      if (localStorage.getItem("accountEmail")) {
        router.push("/dashboard");
      }
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
    <div className="h-screen flex justify-center items-center dark:text-slate-50">
      <div className="h-3/6 w-96 rounded-xl flex justify-center items-center flex-col bg-slate-50 dark:bg-slate-900">
        <h1 className="text-4xl font-bold dark:text-slate-50">Log In</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center flex-col">
            <label className="font-bold text-lg dark:text-slate-50">
              Email:
            </label>
            <input
              className="rounded dark:text-slate-50 border w-60 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="flex justify-center flex-col">
            <label className="font-bold text-lg dark:text-slate-50">
              Password:
            </label>
            <input
              className="rounded dark:text-slate-50 border w-60 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button
            className="dark:text-slate-50 px-3 rounded w-60 h-10 bg-slate-100 dark:bg-slate-700 border border-slate-100 dark:border-slate-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

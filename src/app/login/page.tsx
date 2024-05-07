"use client";
import { getAccountByEmail } from "@/Data/GET/getAccountsByEmail";
import Image from "next/image";
import Logo from "../../../public/logo-light.png";
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
    <div className="transition-colors duration-1000 h-screen flex flex-col justify-center items-center dark:text-gray-50">
      <Image alt="Logo" src={Logo} width={180} />
      <br />
      <h1 className="transition-colors duration-1000 text-4xl font-bold dark:text-gray-50">
        Log in to your account
      </h1>
      <br />
      <div className="transition-colors duration-1000 h-2/6 w-1/4 rounded-xl flex justify-center items-center flex-col bg-white dark:bg-gray-900">
        <form onSubmit={handleSubmit}>
          <div className="transition-colors duration-1000 flex justify-center flex-col w-full">
            <label className="transition-colors duration-1000  text-lg dark:text-gray-50">
              Email address:
            </label>
            <input
              className="transition-colors duration-1000 rounded dark:text-gray-50 border w-96 h-10 border-gray-400 dark:border-gray-600 dark:bg-gray-800"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="transition-colors duration-1000 flex justify-center flex-col">
            <label className="transition-colors duration-1000  text-lg dark:text-gray-50">
              Password:
            </label>
            <input
              className="transition-colors duration-1000 rounded dark:text-gray-50 border w-96 h-10 border-gray-400 dark:border-gray-600 dark:bg-gray-800"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button
            className="transition-colors duration-1000 text-gray-50 px-3 rounded w-96 h-10 bg-indigo-500 border border-gray-100 dark:border-gray-600"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

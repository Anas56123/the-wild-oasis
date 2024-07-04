"use client";
import { insertAccount } from "@/Data/INSERT/insertAccoount";
import { useRouter } from "next/navigation";
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
  const [error, setError] = useState("");
  const router = useRouter();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="transition-colors duration-300 h-screen flex justify-center items-center dark:text-slate-50">
      <div className="transition-colors duration-300 h-5/6 w-2/6 rounded-xl flex justify-center items-center flex-col bg-white dark:bg-slate-900 px-20">
        <h1 className="transition-colors duration-300 text-4xl font-bold dark:text-slate-50">
          Sign up
        </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="transition-colors duration-300 flex justify-center flex-col">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-slate-50">
              Email:
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="transition-colors duration-300 flex justify-center flex-col">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-slate-50">
              User name:
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="transition-colors duration-300 flex justify-center flex-col">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-slate-50">
              Password:
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="transition-colors duration-300 flex justify-center flex-col">
            <label className="transition-colors duration-300 font-bold text-lg dark:text-slate-50">
              Phone number:
            </label>
            <input
              className="transition-colors duration-300 rounded dark:text-slate-50 border w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-[#18212f]"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button
            className="transition-colors duration-300 dark:text-slate-50 px-3 rounded w-72 h-10 bg-slate-50 dark:bg-[#1f2937] border border-slate-100 dark:border-slate-600"
            type="submit"
          >
            Submit
          </button>
        </form>
        <br />
        <p className="transition-colors duration-300 text-red-500 font-bold">
          {error}
        </p>
      </div>
    </div>
  );
}

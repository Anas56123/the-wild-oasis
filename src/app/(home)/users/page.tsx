"use client";
import { insertAccount } from "@/Data/INSERT/insertAccount";
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
    <div className="h-screen flex items-center">
      <div className="rounded-xl flex justify-center items-center flex-col bg-slate-50 dark:bg-black px-20">
        <br />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <label className="font-bold text-lg dark:text-slate-50">
              Email
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr />
          <br />
          <div className="flex justify-center">
            <label className="font-bold text-lg dark:text-slate-50">
              User name
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr />
          <br />
          <div className="flex justify-center">
            <label className="font-bold text-lg dark:text-slate-50">
              Password
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr />
          <br />
          <div className="flex justify-center">
            <label className="font-bold text-lg dark:text-slate-50">
              Phone number
            </label>
            <input
              className="rounded dark:text-slate-50 border-2 w-72 h-10 border-slate-100 dark:border-slate-600 dark:bg-slate-800"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <hr />
          <br />
          <button
            className="dark:text-slate-50 px-3 rounded w-72 h-10 bg-slate-100 dark:bg-slate-700 border-2 border-slate-100 dark:border-slate-600"
            type="submit"
          >
            Submit
          </button>
        </form>
        <br />
        <hr />
        <br />
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    </div>
  );
}

"use client";
import { ReactNode, useState } from "react";
import Link from "../../../node_modules/next/link";
import Logo from "../../../public/logo-dark.png";
import Image from "next/image";

type LinkBg = "" | "link-1" | "link-2" | "link-3" | "link-4" | "link-5";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const [mouseEnter, setMouseEnter] = useState<LinkBg>("");
  const [mouseClick, setMouseClick] = useState<LinkBg>("");

  return (
    <>
      <div className="bg-slate-100 dark:bg-slate-900 flex">
        <aside className="dark:text-slate-50 dark:bg-slate-800 bg-slate-200 px-4 flex w-72 flex-col items-center h-screen">
          <Image height="175" width="175" src={Logo} alt="Logo" />
          <br />
          <div className="flex flex-col gap-4">
            <Link
              href="/dashboard"
              onMouseEnter={() => {
                setMouseEnter("link-1");
              }}
              onMouseLeave={() => {
                setMouseEnter("");
              }}
              onClick={() => {
                setMouseClick("link-1");
              }}
              className={`flex items-center rounded-xl py-3 px-3 gap-4 ${
                (mouseClick || mouseEnter) == "link-1" ? "bg-slate-100 dark:bg-slate-900" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-9 h-9 ${(mouseClick || mouseEnter) == "link-1" ? "text-indigo-500" : "text-slate-500"}`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <p className="text-xl font-bold">Home</p>
            </Link>
            <Link
              href="/bookings"
              onMouseEnter={() => {
                setMouseEnter("link-2");
              }}
              onMouseLeave={() => {
                setMouseEnter("");
              }}
              onClick={() => {
                setMouseClick("link-2");
              }}
              className={`flex items-center rounded-xl py-3 px-3 gap-4 ${
                (mouseClick || mouseEnter) == "link-2" ? "bg-slate-100 dark:bg-slate-900" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-9 h-9 ${(mouseClick || mouseEnter) == "link-2" ? "text-indigo-500" : "text-slate-500"}`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <p className="text-xl font-bold">Bookings</p>
            </Link>
            <Link
              href="/cabins"
              onMouseEnter={() => {
                setMouseEnter("link-3");
              }}
              onMouseLeave={() => {
                setMouseEnter("");
              }}
              onClick={() => {
                setMouseClick("link-3");
              }}
              className={`flex items-center rounded-xl py-3 px-3 gap-4 ${
                (mouseClick || mouseEnter) == "link-3" ? "bg-slate-100 dark:bg-slate-900" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-9 h-9 ${(mouseClick || mouseEnter) == "link-3" ? "text-indigo-500" : "text-slate-500"}`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>

              <p className="text-xl font-bold">Cabins</p>
            </Link>
            <Link
              href="/users"
              onMouseEnter={() => {
                setMouseEnter("link-4");
              }}
              onMouseLeave={() => {
                setMouseEnter("");
              }}
              onClick={() => {
                setMouseClick("link-4");
              }}
              className={`flex items-center rounded-xl py-3 px-3 gap-4 ${
                (mouseClick || mouseEnter) == "link-4" ? "bg-slate-100 dark:bg-slate-900" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-9 h-9 ${(mouseClick || mouseEnter) == "link-4" ? "text-indigo-500" : "text-slate-500"}`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              <p className="text-xl font-bold">Users</p>
            </Link>
            <Link
              href="/settings"
              onMouseEnter={() => {
                setMouseEnter("link-5");
              }}
              onMouseLeave={() => {
                setMouseEnter("");
              }}
              onClick={() => {
                setMouseClick("link-5");
              }}
              className={`flex items-center rounded-xl py-3 px-3 gap-4 ${
                (mouseClick || mouseEnter) == "link-5" ? "bg-slate-100 dark:bg-slate-900" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-9 h-9 ${(mouseClick || mouseEnter) == "link-5" ? "text-indigo-500" : "text-slate-500"}`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <p className="text-xl font-bold">Settings</p>
            </Link>
          </div>
        </aside>
        <div className="w-screen h-screen scroll-smooth overflow-auto">
          {children}
        </div>
      </div>
    </>
  );
}

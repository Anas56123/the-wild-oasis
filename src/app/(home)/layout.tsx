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
      <div className=" bg-slate-900 flex">
        <aside className="dark:text-slate-50 bg-slate-800 px-4 flex w-72 flex-col items-center h-screen">
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
                (mouseClick || mouseEnter) == "link-1" ? "bg-slate-900" : ""
              }`}
            >
              <Image height="75" width="75" src={Logo} alt="Logo" />
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
                (mouseClick || mouseEnter) == "link-2" ? "bg-slate-900" : ""
              }`}
            >
              <Image height="75" width="75" src={Logo} alt="Logo" />
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
                (mouseClick || mouseEnter) == "link-3" ? "bg-slate-900" : ""
              }`}
            >
              <Image height="75" width="75" src={Logo} alt="Logo" />
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
                (mouseClick || mouseEnter) == "link-4" ? "bg-slate-900" : ""
              }`}
            >
              <Image height="75" width="75" src={Logo} alt="Logo" />
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
                (mouseClick || mouseEnter) == "link-5" ? "bg-slate-900" : ""
              }`}
            >
              <Image height="75" width="75" src={Logo} alt="Logo" />
              <p className="text-xl font-bold">Settings</p>
            </Link>
          </div>
        </aside>
        <div className="w-less-than-a-screen-me">{children}</div>
      </div>
    </>
  );
}

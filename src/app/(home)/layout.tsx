"use client";
import { ReactNode, useState } from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import Logo from "../../../public/logo-dark.png";

type LinkBg = "" | "link-1" | "link-2" | "link-3";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const [mouseEnter, setMouseEnter] = useState<LinkBg>("");
  const [mouseClick, setMouseClick] = useState<LinkBg>("");

  return (
    <>
      <header></header>
      <div className=" bg-slate-900 flex items-center">
        <aside className="dark:text-slate-50 bg-slate-700 w-72 flex flex-col items-center">
          <Image height="175" width="175" src={Logo} alt="Logo" />
          <div>
            <Link
              href="/dashboard"
              onMouseEnter={() => {
                setMouseEnter("link-1");
              }}
              onMouseLeave={() => {
                setMouseEnter('')
              }}
              onClick={() => {
                setMouseClick("link-1");
              }}
              className={`flex items-center rounded-xl w-1/2 py-3 px-3 gap-4 ${
                (mouseClick || mouseEnter) == "link-1" ? "bg-slate-900" : ""
              }`}
            >
              <Image height="75" width="75" src={Logo} alt="Logo" />
              <p className="text-2xl font-bold">Home</p>
            </Link>
          </div>
        </aside>
        {children}
      </div>
    </>
  );
}

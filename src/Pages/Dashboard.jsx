import Graph from "../Components/Graph";
import briefcase from "../../public/Icons/briefcase.svg";
import DonutBar from "../Components/DonutBar";
import { useState } from "react";

export default function Dashboard() {
  const [bg, setBg] = useState(''); // btn-1 or btn-2 or btn-3
  const [bgClick, setBgClick] = useState(''); // btn-1 or btn-2 or btn-3

  function handleClick(state) {
    setBgClick(state)
  }

  function handleMouseEnter(state) {
    setBg(state)
  }

  function handleMouseLeave() {
    setBg('')
  }

  return (
    <>
      <div className="flex justify-between w-50">
        <h1 className="text-4xl font-bold dark:text-slate-50">Dashboard</h1>
        <div className="border-slate-800 border-2 bg-wihte w-80 rounded flex justify-between px-1 dark:bg-slate-900">
          <button onClick={() => handleClick('btn-1')} onMouseEnter={() => handleMouseEnter('btn-1')} onMouseLeave={() => handleMouseLeave()} className={`rounded px-1 dark:text-slate-50 ${bg == 'btn-1' || bgClick == 'btn-1' ? "bg-indigo-500" : ''} ${bgClick == "btn-1" ? "border-slate-400 border" : ""}`}>Last 7 days</button>
          <button onClick={() => handleClick('btn-2')} onMouseEnter={() => handleMouseEnter('btn-2')} onMouseLeave={() => handleMouseLeave()} className={`rounded px-1 dark:text-slate-50 ${bg == 'btn-2' || bgClick == 'btn-2' ? "bg-indigo-500" : ''} ${bgClick == "btn-2" ? "border-slate-400 border" : ""}`}>Last 30 days</button>
          <button onClick={() => handleClick('btn-3')} onMouseEnter={() => handleMouseEnter('btn-3')} onMouseLeave={() => handleMouseLeave()} className={`rounded px-1 dark:text-slate-50 ${bg == 'btn-3' || bgClick == 'btn-3' ? "bg-indigo-500" : ''} ${bgClick == "btn-3" ? "border-slate-400 border" : ""}`}>Last 90 days</button>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={briefcase} alt="briefcase" />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div>
          <DonutBar />
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-4">Graph Example</h1>
            <Graph />
          </div>
        </div>
      </div>
    </>
  );
}

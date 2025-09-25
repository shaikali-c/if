"use client";

import { ChevronRight, Search, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

// Dynamically import the map so it only runs in the browser
const MapComponent = dynamic(() => import("@/components/mapbox"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Mapss() {
  return (
    <section
      className={`w-screen min-h-screen grid md:grid-cols-[75vw_25vw] grid-rows-2 md:grid-rows-1 ${inter.className}`}
    >
      <section style={{ height: "100%" }}>
        <MapComponent />
      </section>
      <section className="w-full bg-neutral-900 border-t-2 md:border-t-0 md:border-l-2 border-neutral-800">
        <header className="border-b-2 border-neutral-800 w-full flex gap-2 items-center pl-6">
          <Search color="#eee" />
          <input
            type="text"
            placeholder="Search for any state, city, or country"
            className="p-5 w-full pl-3 outline-0"
          />
        </header>
        <p className="p-6 text-sm text-neutral-400">
          This AI-powered flood prediction model provides forecasts based on
          available data, but it does not guarantee accuracy. Predictions should
          be used for guidance only, not as a definitive warning.
        </p>
        <section className="p-6 pt-0 flex flex-wrap gap-5">
          <InfBox color={"bg-red-500"} text={"High Risk"} />
          <InfBox color={"bg-yellow-400"} text={"Moderate Risk"} />
          <InfBox color={"bg-lime-600"} text={"Low Risk"} />
        </section>
        <section className="p-6 pt-6 border-t-2 border-neutral-800">
          <h2 className="text-xl flex items-center gap-3">
            <Sparkles size={20} />
            Factors used to predict floods
          </h2>
          <div className="p-5 pl-6 text-neutral-400 flex flex-col gap-6">
            <p className="flex gap-1 items-center">
              <ChevronRight size={15} />
              Rainfall Patterns
            </p>
            <p className="flex gap-1 items-center">
              <ChevronRight size={15} />
              River & Water Levels
            </p>
            <p className="flex gap-1 items-center">
              <ChevronRight size={15} />
              Topography & Terrain
            </p>
            <p className="flex gap-1 items-center">
              <ChevronRight size={15} />
              Historical Flood Data
            </p>
            <p className="flex gap-1 items-center">
              <ChevronRight size={15} />
              Satellite & Remote Sensing Data
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

function InfBox({ color, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 ${color}  rounded-full`}></div>
      <p>{text}</p>
    </div>
  );
}

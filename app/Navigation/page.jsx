import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavigationBar = () => {
  return (
    //navbar div
    // add static, fixed, sticky, and relative
    <div className="flex justify-between items-center shadow p-4 bg-white fixed top-0 left-0 right-0">
      <div className="flex items-center gap-4 ml-4">
        <div className="pr-4">
          <FontAwesomeIcon icon={faCode} size="2x" color="black" />
        </div>
        <div className="text-2xl font-semibold">
          <h1>CodeMaster</h1>
        </div>
      </div>
      <div className="flex gap-4 mr-4">
        <div className="rounded border-solid bg-white text-black border border-zinc-200 px-3 py-1 bg-stone-50 hover:bg-stone-100 active:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-300">
          <Link className="text-sm font-semibold" href={`/`}>
            Home
          </Link>
        </div>
        <div className="rounded border-solid text-black border px-3 py-1 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link
            href={`/components/PlayGround`}
            className="text-white text-sm font-semibold"
          >
            Playground
          </Link>
        </div>
        <div className="rounded border-solid bg-white text-black border border-black px-3 py-1 bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-200 focus:outline-none focus:ring focus:ring-neutral-300">
          <Link
            href={`/components/Coding-Arena`}
            className="text-sm font-semibold"
          >
            Arena
          </Link>
        </div>
        <div className="rounded border-solid text-black border border-black px-3 py-1 bg-gray-600 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-700">
          <Link
            href={`/components/BattleGround`}
            className="text-white text-sm font-semibold"
          >
            Battleground
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

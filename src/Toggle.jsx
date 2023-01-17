import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-slate-200" : "bg-slate-200"}
          relative inline-flex h-[56px] w-44 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        {/* <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-10" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        /> */}
        <div className="">
          <svg
            className={`${enabled ? "translate-x-4" : "-translate-x-0"}`}
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <circle
                className={`${
                  enabled ? "fill-stone-600" : "fill-teal-700"
                } px-2`}
                cx="28"
                cy="28"
                r="28"
              />
              <path
                className={`${enabled ? "fill-zinc-400" : "fill-zinc-200"}`}
                d="M23 19v18l5-5.058L33 37V19z"
              />
            </g>
          </svg>
        </div>
        <div
          className={`${
            enabled ? "px-4 text-stone-600" : "text-teal-700"
          } px-2 py-4 font-bold`}
        >
          {" "}
          {`${enabled ? "Bookmark" : "Bookmarked"}`}
        </div>
      </Switch>
    </div>
  );
}

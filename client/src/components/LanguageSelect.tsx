import { useState } from "react";

export const LanguageSelect = () => {
  const [triggerDd, setTriggerDd] = useState(false);

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-white hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-400 font-medium rounded-md text-sm px-3 py-1.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setTriggerDd((prev) => !prev)}
      >
        EN
      </button>
      {triggerDd ? (
        <div
          id="dropdown"
          className="z-10 absolute inset-0 top-10 -left-[8.2rem] bg-white divide-y divide-black rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 bg-white rounded-sm"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-black hover:text-white mx-1 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

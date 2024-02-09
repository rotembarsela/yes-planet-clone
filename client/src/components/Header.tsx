import { Navbar } from "./Navbar";
import PlanetIcon from "../assets/planet-logo.svg";
import { Link } from "@tanstack/react-router";
import { MapPin, Search, UserRound } from "lucide-react";
import { useState } from "react";
import { LanguageSelect } from "./LanguageSelect";

export const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="h-[135px]">
      <div className="h-[85px] flex gap-5 bg-black text-white">
        <div className="w-[980px] mx-auto flex items-center justify-between">
          <Link to="/" className="block h-full">
            {/* TODO: replace img tag with the actual svg to avoid img logo fetch on page load */}
            <img src={PlanetIcon} alt="planet" className="h-full" />
          </Link>
          <div className="flex gap-7 items-center">
            <div className="flex gap-3">
              <MapPin />
              <span>Select my cinema</span>
            </div>
            <div className="flex gap-3">
              <UserRound />
              <span>Log in</span>
            </div>
            <form className="relative">
              <input
                type="text"
                id="searchMovieId"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#191919] text-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
              <div
                className="absolute inset-y-0 end-0 flex items-center pe-2.5 cursor-pointer"
                onClick={() => alert(search)}
              >
                <Search className="cursor-pointer" />
              </div>
            </form>
            <LanguageSelect />
          </div>
        </div>
      </div>
      <div className="h-[50px]">
        <Navbar />
      </div>
    </header>
  );
};

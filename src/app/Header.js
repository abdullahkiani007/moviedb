"use client";

import Link from "next/link";
import { useState } from "react"; // Import the useState hook
import Input from "./Input";
function Header() {
  // Use useState to manage the state of the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav
        className={`p-4 bg-red-800 flex pl-10 text-xl justify-between text-white text-center md:text-3xl`}
      >
        <Link href="/">
          <p>Pro Movies</p>
        </Link>

        <div className="space-x-3 hidden md:flex align-center">
          <Input />
        </div>

        <button
          className="md:hidden text-sm bg-slate-800 px-5 rounded-lg py-2"
          onClick={toggleDropdown} // Call toggleDropdown when the button is clicked
        >
          Menu
        </button>
      </nav>
      {/* Dropdown menu */}

      <div className=" md:hidden">
        {isDropdownOpen && ( // Conditionally render the dropdown content based on the state
          <div className=" w-full pl-8 flex flex-col items-center mt-5">
            <Input />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

function Input() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="pl-2 text-center py-2 bg-transparent border border-white rounded-lg text-white w-40 h-8 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Link href={`/search/${search}`}>
        <button className="text-white bg-slate-800 rounded-lg text-sm px-4 py-2 mx-2">
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Input;

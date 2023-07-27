import Link from "next/link";
import React from "react";

function Page({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="flex brightness-75 h-96 flex-col m-10 overflow-hidden border rounded-b-lg hover:brightness-100 relative">
        <img
          className="w-auto max-h-72"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="absolute bottom-20 left-2 bg-red-800 rounded-full p-2 text-sm text-white font-bold w-10 ">
          <h2>{Math.floor(movie.vote_average * 100) / 100}</h2>
        </div>
        <div className="text-start mt-2 p-2 text-white w-52">
          <p className="">{movie.title}</p>
          <p className="font-normal text-slate-400">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default Page;

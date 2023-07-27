import React from "react";
import Movie from "../movies/movie";

async function page({ params }) {
  const { movielist } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movielist || "popular"}?api_key=${
      process.env.MOVIE_API
    }`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const results = data.results;

  const movies = results.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });

  return (
    <div className="text-center mt-20 bg-black">
      <h1 className="text-3xl text-white underline  m-10">
        {`${movielist || "Popular"}`} Movies
      </h1>
      <div className="flex flex-row overflow-hidden flex-wrap justify-center">
        {movies}
      </div>
    </div>
  );
}

export default page;

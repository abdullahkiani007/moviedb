import React from "react";
import Search from "../page";
async function page({ params }) {
  const { search } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API}&query=${search}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const results = data.results;

  return (
    <div>
      <h1 className="text-white text-3xl text-center mt-20 mb-10">
        Search Result : {search}
      </h1>
      <Search params={results} />
    </div>
  );
}

export default page;

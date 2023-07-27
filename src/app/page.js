import Link from "next/link";
import Movie from "./movies/page";
import Input from "./Input";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.MOVIE_API}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const results = await data.results;
  const movies = await results.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });

  return (
    <div className="text-center mt-20 bg-black">
      <Link href={"/popular"}>
        <button className="text-sm bg-red-800 text-white font-bold mx-4 px-5 rounded-lg py-2">
          Popular
        </button>
      </Link>

      <Link href={"/top_rated"}>
        <button className="text-sm bg-red-800 text-white font-bold mx-4 px-5 rounded-lg py-2">
          Top Rated
        </button>
      </Link>
      <h1 className="text-3xl text-white underline  m-10">Trending</h1>
      <div className="flex flex-row overflow-hidden flex-wrap justify-center">
        {movies}
      </div>
    </div>
  );
}

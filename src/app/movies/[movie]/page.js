async function page({ params }) {
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.MOVIE_API}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return (
    <div
      // key={data.id}
      className="flex flex-col-reverse md:flex-row w-fit  m-10 text-white text-center lg:mx-40 justify-center "
    >
      <div className="flex flex-col h-full md:text-start md:w-1/2  tracking-wide leading-loose">
        <h1 className="text-3xl">{data.title}</h1>
        <div>
          <h2>
            Rating:{" "}
            <span className="bg-red-700 px-2">
              {Math.floor(data.vote_average * 100) / 100}
            </span>
          </h2>
          <h2>
            Release Date:{" "}
            <span className="bg-red-700 px-2">{data.release_date}</span>
          </h2>
        </div>
        <h1 className="font-bold text-start mt-5 mb-1">Overview: </h1>
        <p className="text-md text-start tracking-wide leading-loose">
          {data.overview}
        </p>
      </div>

      <img
        className="w-96 h-auto  self-center"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}

export default page;

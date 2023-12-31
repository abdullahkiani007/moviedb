"use client";
import React from "react";
import { useState } from "react";
import Movie from "../movies/movie";
// fetch movies

function search({ params }) {
  const result = params;
  console;

  return (
    <div className="flex flex-wrap justify-center">
      {result.map((movie) => {
        if (movie.poster_path === null || movie.vote_average < 3)
          return undefined;
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default search;

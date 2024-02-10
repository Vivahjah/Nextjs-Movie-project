import Image from "next/image";
import Movie from "./Movie";
// const movie = https://api.themoviedb.org/3/movie/popular
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEy}`
  );
  const movies = await data.json();
  console.log(movies);
  return (
    <main>
      
      <div className="grid gap-16 grid-cols-fluid">

      {movies.results.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      </div>
    </main>
  );
}

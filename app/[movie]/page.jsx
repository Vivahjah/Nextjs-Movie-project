import Image from "next/image";

export default async function MovieDetails({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEy}`
  );
  const response = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2 className="text-2xl">{response.title}</h2>
      <h2 className="text-lg">{response.release_date}</h2>
      <h2>Runtime: {response.runtime} minutes</h2>
      <h2 className="bg-green-600 my-2 py-2 px-4 inline-block rounded-md text-sm">
        {response.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imagePath + response.backdrop_path}
        width={1000}
        height={1000}
        prioritys
      />
      <p>{response.overview}</p>
    </div>
  );
}

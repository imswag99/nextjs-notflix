import Link from "next/link";
import MovieCard from "../components/MovieCard";

const movie = async () => {
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0288257c7amsh0071255ebe57026p16795cjsnad67f9df33e9",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <div className="p-8 flex flex-col gap-8 justify-center items-center">
      <h1 className="font-bold text-3xl mb-8">Series and Movies</h1>
      <div className="w-full grid grid-cols-4 gap-y-16 place-items-center">
        {main_data.length > 0 &&
          main_data.map((movie, i) => {
            return <MovieCard key={i} {...movie} />;
          })}
      </div>
    </div>
  );
};

export default movie;

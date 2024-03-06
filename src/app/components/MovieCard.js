import Link from "next/link";
import Image from "next/image";


const MovieCard = ({jawSummary}) => {
  const {id, type, title, synopsis, backgroundImage} = jawSummary;

  return (
    <div className="w-[80%] flex flex-col gap-4 rounded-md bg-red-50 p-4">
      <div className="w-full grid place-items-center rounded-xl overflow-hidden">
        <Image src={backgroundImage.url} alt={title} width={"250"} height={"200"}  />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="w-full truncate">{synopsis}</p>
        <Link href={`/movie/${id}`} className="w-[40%] text-center py-2 bg-gray-700 text-white text-xs rounded-3xl transition-all hover:bg-red-800" >Read more</Link>
      </div>
    </div>
  )
}

export default MovieCard
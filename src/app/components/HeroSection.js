import Image from "next/image"
import Link from "next/link"

const HeroSection = ({title, image, alt}) => {
  return (
    <div className="w-full bg-red-50 flex justify-center items-center gap-64 py-16">
      <div className="w-[30%] text-left flex flex-col gap-6 items-start">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur voluptatibus, aliquam, eaque optio eos doloremque voluptates, cupiditate recusandae a incidunt possimus excepturi quam porro illo quibusdam reiciendis facilis aliquid.</p>
        <Link href={"../movie"} className="px-4 py-2 bg-gray-700 text-white text-sm rounded-3xl transition-all hover:bg-red-800">Explore</Link>
      </div>
      <div>
        <Image
          src={image}
          width={"300"}
          height={"300"}
          alt={alt}
         />
      </div>
    </div>
  )
}

export default HeroSection
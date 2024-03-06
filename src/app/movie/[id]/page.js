import Image from "next/image";

const page = async ({params}) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0288257c7amsh0071255ebe57026p16795cjsnad67f9df33e9",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <div className='w-full bg-red-50 flex items-center p-8'>
      <div className='flex flex-col gap-4'>
        <h1 className="capitalize font-semibold text-xl">Notflix / <span className="text-red-700">{main_data.type}</span></h1>
        <div>
        <Image className="rounded-lg shadow-md shadow-gray-600" src={main_data.backgroundImage.url} alt={main_data.title} width={"450"} height={"350"}  />
        </div>
        <h1 className="font-bold text-3xl">{main_data.title}</h1>
        <p>{main_data.synopsis}</p>
      </div>
    </div>
  )
}

export default page
import Link from "next/link";

const ContactCard = ({ icon, heading, p1, p2, hlink }) => {
  return (
    <div className="w-[20rem] py-4 flex flex-col gap-4 items-center text-sm bg-white border border-red-900 rounded-lg">
      {icon}
      <h1 className="font-semibold">{heading}</h1>
      <div className="text-xs">
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
      <Link href={"/"}>{hlink} ⇢</Link>
    </div>
  );
};

export default ContactCard;

import ContactCard from "../components/ContactCard";
import { MdEmail } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdForum } from "react-icons/md";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <div className="w-full text-center flex flex-col gap-8 p-8 bg-red-50">
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <div className="w-full flex justify-between items-center">
        <ContactCard
          icon={<MdEmail size={30} />}
          heading={"Email"}
          p1={"Monday to Friday"}
          p2={"Expected response time: 72 hours"}
          hlink={"Send E-mail"}
        />
        <ContactCard
          icon={<IoChatboxEllipses size={30} />}
          heading={"Live Chat"}
          p1={"Weekdays: 9AM - 6PM ET"}
          p2={"Weekends: 9AM - 6PM ET"}
          hlink={"Chat Now"}
        />
        <ContactCard
          icon={<MdForum size={30} />}
          heading={"Community Forum"}
          p1={"Monday to Friday"}
          p2={"Expected response time: 72 hours"}
          hlink={"Ask The Community"}
        />
      </div>
      <section className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-xl">We'd like to here from you</h1>
        <ContactForm />
      </section>
      <div>
        <iframe
        className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.85005404477!2d-2.388268634972724!3d53.47213208268243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2sOld%20Trafford!5e0!3m2!1sen!2sin!4v1709703922362!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default contact;

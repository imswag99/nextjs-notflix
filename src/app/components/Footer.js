import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center p-10 bg-gray-950 text-red-50'>
      <div className='w-full flex justify-between'>
        <h1 className='font-bold text-2xl'>NOTFLIX</h1>
        <div className="flex gap-4 items-center">
          <FaFacebookF size={25} />
          <FaInstagram size={25} />
          <FaLinkedinIn size={25} />
          <FaYoutube size={25} />
          <FaDiscord size={25} />
        </div>
      </div>
      <div className='flex gap-32 text-xs'>
        <ul>
          <li className='italic border-b mb-2'>Company</li>
          <li className='mb-1'>Home</li>
          <li className='mb-1'>Movies</li>
          <li className='mb-1'>About</li>
          <li className='mb-1'>Contact</li>
        </ul>
        <ul>
          <li className='italic border-b mb-2'>Services</li>
          <li className='mb-1'>App design</li>
          <li className='mb-1'>Web design</li>
          <li className='mb-1'>Logo design</li>
          <li className='mb-1'>Banner design</li>
        </ul>
        <ul>
          <li className='italic border-b mb-2'>Account</li>
          <li className='mb-1'>Profile</li>
          <li className='mb-1'>My account</li>
          <li className='mb-1'>Preferences</li>
          <li className='mb-1'>Purchases</li>
        </ul>
        <ul>
          <li className='italic border-b mb-2'>Courses</li>
          <li className='mb-1'>HTML & CSS</li>
          <li className='mb-1'>Javascript</li>
          <li className='mb-1'>Photography</li>
          <li className='mb-1'>Adobe</li>
        </ul>
        <ul>
          <li className='italic border-b mb-2'>Subscribe</li>
          <li className='mb-2'><input type="text" placeholder='Enter your email' className='p-2 text-xs bg-transparent border border-red-50 rounded-lg' /></li>
          <li className='mb-1'><button className='bg-red-50 rounded-lg text-gray-950 text-center w-full py-2'>Subscribe</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
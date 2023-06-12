import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/legacy/image";

function Footer() {
  return (
    <div className=" w-full bg-gray-300  grid grid-cols-6 relative p-4  ">
      <div className="relative  rounded-full    ">
        <Image
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=" bg-gray-500  rounded-full"
          src="/photo2.png"
        />
      </div>
      <div className=" flex-cols  gap-6 p-8 col-span-2">
        <ul>
          <li>
            <h2 className=" font-semibold text-lg ">Gustavo Enrique Martin</h2>
            <p className=" text-gray-700">Fullstack Developer</p>
          </li>
          <li className=" py-8">Contact Form</li>
        </ul>
      </div>
      <div className=" flex-cols  gap-6 p-8 col-span-3">
        <ul>
          <li className=" py-2 ">
            <SiGmail size="2.5rem" className=" text-red-700" />{" "}
            <p>gustavoemartin1991@gmail.com</p>
          </li>
          <li className=" py-2 ">
            <BsWhatsapp size="2.5rem" className=" text-green-700" />
            <p>1153459818</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

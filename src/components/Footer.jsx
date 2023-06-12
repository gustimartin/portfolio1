import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/legacy/image";

function Footer() {
  return (
    <div className=" w-full bg-gray-300  grid grid-cols-6 relative p-4 ">
      <div className="relative  rounded-full    ">
        <Image
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=" bg-sky-700  rounded-full"
          src="/photo2.png"
        />
      </div>
      <div>
        <ul className=" flex-cols  gap-6 px-4">
          <li className="  gap-4">
            <SiGmail size="2.5rem" /> <p>gustavoemartin1991@gmail.com</p>
          </li>
          <li className="  gap-4">
            <BsWhatsapp size="2.5rem" />
            <p>1153459818</p>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

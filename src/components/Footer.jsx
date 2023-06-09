import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className=" w-full bg-stone-700 h-24 bg-opacity-30  backdrop-blur-md ">
      <ul className=" flex  gap-6 px-4">
        <li className="  gap-4">
          <SiGmail size="2.5rem" /> <p>gustavoemartin1991@gmail.com</p>
        </li>
        <li className=" flex-row gap-4">
          <BsWhatsapp size="2.5rem" />
          <p>1153459818</p>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default Footer;

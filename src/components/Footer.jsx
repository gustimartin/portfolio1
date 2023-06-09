import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className=" w-full bg-stone-700 h-24 bg-opacity-30  backdrop-blur-md flex-center">
      <ul className=" flex">
        <li className=" flex-row gap-4">
          <SiGmail size="2.5rem" /> gustavoemartin1991@gmail.com
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Footer;

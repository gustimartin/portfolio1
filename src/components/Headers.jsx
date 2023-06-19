"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/legacy/image";
import logoNav2 from "../../public/lgf2.png";
import logoNav from "../../public/lgf1.png";
import ThemeSwitch from "@/app/themeSwitch.js";
function Headers() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" z-[100] fixed w-full bg-gray-900  shadow-xl h-20 ease-in duration-300 ">
      <div className=" flex justify-between  items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={logoNav} alt="image" width="150" height="80" />
        </Link>
        <div>
          <ul className="  hidden md:flex text-white ">
            <Link href="/">
              <li className=" list-none ml-10 text-sm uppercase hover:border-b ">
                <nav>Home</nav>
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" list-none ml-10 text-sm uppercase hover:border-b ">
                <nav>Projects</nav>
              </li>
            </Link>

            <Link href="/tech">
              <li className="  list-none ml-10 text-sm uppercase hover:border-b">
                <nav>Tecnologies</nav>
              </li>
            </Link>

            <Link href="/about">
              <li className=" list-none ml-10 text-sm uppercase hover:border-b">
                <nav>About</nav>
              </li>
            </Link>
            <Link href="/contact">
              <li className="  list-none ml-10 text-sm uppercase hover:border-b">
                <nav>Contact</nav>
              </li>
            </Link>
            <li className="  list-none ml-10 text-sm uppercase hover:border-b">
              <ThemeSwitch />
            </li>
          </ul>
          <div onClick={handleNav} className=" md:hidden  text-white">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in duration-500 overflow-auto   "
              : " fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <div className=" ">
                <Image src={logoNav2} alt="image" width="100" height="50" />
              </div>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=" border-b border-gray-400 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4 ">Let the coding beegin</p>
            </div>
          </div>
          <div className=" flex flex-col py-4">
            <ul className=" uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/tech">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  Tecnologies
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className=" py-4 text-sm">
                  projects
                </li>
              </Link>
              <Link onClick={() => setNav(false)} href="/about">
                <li className=" py-4 text-sm">About</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/contact">
                <li className=" py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className=" pt-10">
              <p className=" uppercase tracking-widest text-sky-950">
                Let&#39;s Connect
              </p>
              <div className=" flex item-center justify-between my-4 w-full sm:w-[80%] ">
                {" "}
                <Link
                  href="https://www.linkedin.com/in/gustavo-martin-b64310263/"
                  target="_blank"
                >
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsLinkedin />
                  </div>
                </Link>
                <Link href="https://github.com/gustimartin" target="_blank">
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsGithub />
                  </div>
                </Link>
                <Link onClick={() => setNav(false)} href="/contact">
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
// {
//   /* <div
//         classname=" flex items-center text-white
//         "
//       >
//         <ul className=" flex text-white gap-7 items-center justify-end font-semibold text-xl  ">
//           <li>
//             <Link href="https://github.com/gustimartin">
//               <BsGithub size=" 2.5rem" />
//             </Link>
//           </li>
//           <li>
//             <Link href="https://www.linkedin.com/in/gustavo-martin-b64310263/">
//               <BsLinkedin size="2.5rem" />
//             </Link>
//           </li>
//         </ul>
//       </div> */

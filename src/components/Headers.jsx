"use client";
import Link from "next/link";
import { Container } from "postcss";
import { DiCssdeck } from "react-icons/di";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

function Headers() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" z-[100] fixed w-full bg-gray-900 shadow-xl h-20 ease-in duration-300">
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <div className="text-white">
            <DiCssdeck size="2.5rem" />
          </div>
        </Link>
        <div>
          <ul className="  hidden md:flex text-white ">
            <Link href="/project">
              <li
                onClick={() => setNav(false)}
                className=" list-none ml-10 text-sm uppercase hover:border-b "
              >
                <nav>Projects</nav>
              </li>
            </Link>

            <Link href="/tech">
              <li
                onClick={() => setNav(false)}
                className="  list-none ml-10 text-sm uppercase hover:border-b"
              >
                <nav>Tecnologies</nav>
              </li>
            </Link>

            <Link href="/about">
              <li
                onClick={() => setNav(false)}
                className=" list-none ml-10 text-sm uppercase hover:border-b"
              >
                <nav>About</nav>
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setNav(false)}
                className="  list-none ml-10 text-sm uppercase hover:border-b"
              >
                <nav>Contact</nav>
              </li>
            </Link>
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
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in duration-500"
              : " fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <div className=" ">
                {" "}
                <DiCssdeck size="2.5rem" />
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
                <li className=" py-4 text-sm">Home</li>
              </Link>
              <Link href="/tech">
                <li className=" py-4 text-sm">Tecnologies</li>
              </Link>
              <Link href="/project">
                <li className=" py-4 text-sm">projects</li>
              </Link>
              <Link href="/about">
                <li className=" py-4 text-sm">About</li>
              </Link>
              <Link href="/contact">
                <li className=" py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className=" pt-40">
              <p className=" uppercase tracking-widest text-sky-950">
                Let&#39;s Connect
              </p>
              <div className=" flex item-center justify-between my-4 w-full sm:w-[80%] ">
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsLinkedin />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsGithub />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
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

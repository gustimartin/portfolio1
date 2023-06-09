import Link from "next/link";
import { Container } from "postcss";
import { DiCssdeck } from "react-icons/di";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Headers() {
  return (
    <div className=" w-full bg-sky-700 justify-between grid grid-rows-1 grid-cols-3 p-4 pt-8 items-center">
      <Link href="/">
        <div className=" flex items-center text-white font-semibold text-xl justify-start">
          <DiCssdeck size="2rem" /> <span>Portfolio</span>
        </div>
      </Link>
      <div
        classname=" flex items-center text-white
        "
      >
        <ul className=" flex text-white gap-4 items-center justify-center font-semibold text-xl  ">
          <li className=" list-none flex">
            <Link href="/project">
              <nav>Projects</nav>
            </Link>
          </li>

          <li className=" list-none flex">
            <Link href="/tech">
              <nav>Tecnologies</nav>
            </Link>
          </li>

          <li className=" list-none flex">
            <Link href="/about">
              <nav>About</nav>
            </Link>
          </li>
        </ul>
      </div>
      <div
        classname=" flex items-center text-white
        "
      >
        <ul className=" flex text-white gap-7 items-center justify-end font-semibold text-xl  ">
          <li>
            <Link href="https://github.com/gustimartin">
              <BsGithub size=" 2.5rem" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/gustavo-martin-b64310263/">
              <BsLinkedin size="2.5rem" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headers;

import Image from "next/legacy/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import hero2 from "../../public/hero2.jpg";
function Hero() {
  return (
    <div
      id="hero"
      className=" mx-auto   pt-96 md:pt-2 bg-gray-200 w-full h-screen  pb-96 md:pb-0"
    >
      <div className=" pb-4 max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center md:grid md:grid-cols-2">
        <div className=" flex-col  py-6 pl-8 md:max-w-prose">
          <h1 className="  text-sky-900 text-center  text-6xl font-bold tracking-widest">
            Welcome To
          </h1>
          <br />
          <h2 className=" text-center text-5xl font-semibold  py-2 text-sky-900  tracking-widest">
            My Personal Portfolio
          </h2>
          <p className=" first-letter:text-5xl first-letter:text-gray-900  max-w-[85%] mx-auto text-xl  pt-4 pb-2 text-gray-700 tracking-widest">
            Portfolio build with Next js, React js, javascript and Tailwind css
            with a responsive design and a light/Dark feature. Please feel free
            to look around and see my work and my background.
          </p>
        </div>

        <div className=" p-2">
          {" "}
          <Image
            src={hero2}
            alt="image"
            // layout="intrinsic"
            className=" rounded-sm shadow-xl"
            // width="1200"
            // height="800"
          />{" "}
          <div className="flex  py-2 md:pt-6 item-center md:pt-0 justify-between  p-4  max-w-[330px] m-auto   ">
            <Link
              href="https://www.linkedin.com/in/gustavo-martin-b64310263/"
              target="_blank"
            >
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/gustimartin" target="_blank">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsGithub />
              </div>
            </Link>
            {/* <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div> */}
            <Link href="/contact">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import bgImg from "../../../public/henrycountry.png";
function Page() {
  return (
    <div className="w-full pt-20 dark:bg-slate-800">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bgImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200  z-10 p-2">
          <h2 className="py-2">Henry Countries</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className=" dark:text-gray-400">Project</p>
          <h2 className=" dark:text-gray-200">Overview</h2>
          <p className=" dark:text-gray-200">
            Henry Countries was my first full-stack project consuming a
            countries API. In this project, you can search or filter for a
            country and retrieve details such as population, capital, and
            continent. Additionally, you have the option to create a new
            activity for a country or explore existing activities available in
            that country. I learned a lot from this project, and if I could do
            something differently, I would make the website responsive and
            change its style.
          </p>
          <Link
            href="https://github.com/gustimartin/pi-countries-henry"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8  dark:bg-gray-400 dark:shadow-lg dark:shadow-gray-700">
              Code
            </button>
          </Link>
          {/* 
          <Link href="" target="_blank">
            <button className="px-8 py-2 mt-4 dark:bg-gray-400 dark:shadow-lg dark:shadow-gray-700">
              Demo
            </button>
          </Link> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg  dark:shadow-gray-700 shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-gray-200">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p
                className="text-gray-600 
              dark:text-gray-200
              py-2 flex items-center"
              >
                React
              </p>
              <p
                className="text-gray-600 py-2 flex
              dark:text-gray-200 items-center"
              >
                Css3
              </p>
              <p
                className="text-gray-600 
              dark:text-gray-200 py-2 flex items-center"
              >
                Javascript
              </p>
              <p className="text-gray-600 dark:text-gray-200 py-2 flex items-center">
                Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Nodejs
              </p>
              <p className="text-gray-600 py-2 dark:text-gray-200 flex items-center">
                MySQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer dark:text-gray-200">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default Page;

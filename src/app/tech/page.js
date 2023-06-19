import { GrReactjs } from "react-icons/gr";
import react from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiMysql,
} from "react-icons/si";

function Page() {
  return (
    <div
      id="tech"
      className="  w-full lg:h-screen  p-2 pt-28 md:pt-6 dark:bg-slate-800 "
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="flex text-sky-950 dark:text-gray-200 tracking-widest p-4 ">
          Skills
        </h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiHtml5 size="2.5rem" className=" text-orange-700" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Html5</h3>
              </div>
            </div>
          </div>
          <div
            className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white 
          dark:bg-gray-300
          dark:hover:bg-gray-200"
          >
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiCss3 size="2.5rem" className=" text-sky-700" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200 dark:hover:text-gray-900">
                  Css3
                </h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white  dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiJavascript size="2.5rem" className=" text-yellow-400" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Javascript</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiTailwindcss size="2.5rem" className=" text-sky-500" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">TailwindCss</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiReact size="2.5rem" className=" text-sky-500" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Reactjs</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white  dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiNextdotjs size="2.5rem" className=" text-black" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Nextjs</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiRedux size="2.5rem" className=" text-purple-700" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Redux</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300  hover:bg-white  dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiNodedotjs size="2.5rem" className=" text-green-700" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Nodejs</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiExpress size="2.5rem" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Express</h3>
              </div>
            </div>
          </div>
          <div
            className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white dark:bg-gray-300
          dark:hover:bg-gray-200"
          >
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiMysql size="2.5rem" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200 dark:hover:text-gray-900">
                  MySQL
                </h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white dark:hover:bg-gray-800">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiMongodb size="2.5rem" className=" text-green-700" />
              </div>
              <div>
                <h3 className=" dark:text-gray-200">Mongodb</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

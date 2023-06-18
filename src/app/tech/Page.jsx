import { GrReactjs } from "react-icons/gr";
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
    <div id="tech" className="  w-full lg:h-screen  p-2 pt-28 md:pt-6 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="flex text-sky-950 tracking-widest p-4 ">Skills</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiHtml5 size="2.5rem" className=" text-orange-700" />
              </div>
              <div>
                <h3>Html5</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiCss3 size="2.5rem" className=" text-sky-700" />
              </div>
              <div>
                <h3>Css3</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiJavascript size="2.5rem" className=" text-yellow-400" />
              </div>
              <div>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiTailwindcss size="2.5rem" className=" text-sky-500" />
              </div>
              <div>
                <h3>TailwindCss</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiReact size="2.5rem" className=" text-sky-500" />
              </div>
              <div>
                <h3>Reactjs</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiNextdotjs size="2.5rem" className=" text-black" />
              </div>
              <div>
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiRedux size="2.5rem" className=" text-purple-700" />
              </div>
              <div>
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300  hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiNodedotjs size="2.5rem" className=" text-green-700" />
              </div>
              <div>
                <h3>Nodejs</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiExpress size="2.5rem" />
              </div>
              <div>
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiMysql size="2.5rem" />
              </div>
              <div>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:bg-white">
            <div className="grid grid-cols-2 justify-center gap-4 items-center ">
              <div className=" m-auto">
                <SiMongodb size="2.5rem" className=" text-green-700" />
              </div>
              <div>
                <h3>Mongodb</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

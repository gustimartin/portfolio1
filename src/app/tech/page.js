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

function page() {
  return (
    <div className=" bg-gray-200 w-full h-screen  grid-cols-3   pt-8 px-4 ">
      <div className="w-12/12 p-8 bg-white rounded-lg shadow-lg text-xl  justify-center self-center item-center  content-center">
        <h1 className=" text-sky-700">Frontend</h1>
        <ul className="flex  gap-6 justify-center  ">
          <li className=" ">
            <SiNextdotjs size="2.5rem" />
            <p>Nextjs</p>
          </li>{" "}
          <li>
            <SiReact size="2.5rem" />
            <p>Reactjs</p>
          </li>
          <li>
            <SiTailwindcss size="2.5rem" />
            <p>TailwindCss</p>
          </li>
          <li>
            <SiJavascript size="2.5rem" />
            <p>Javascript</p>
          </li>
          <li>
            <SiHtml5 size="2.5rem" />
            <p>Html5</p>
          </li>
          <li>
            <SiCss3 size="2.5rem" />
            <p>Css3</p>
          </li>
          <li>
            <SiRedux size="2.5rem" />
            <p>Redux</p>
          </li>
        </ul>
      </div>
      <div className="w-12/12 p-8 bg-white rounded-lg shadow-xl mt-8 text-xl">
        <h1 className=" text-sky-700">Backend</h1>
        <ul className="flex gap-4 justify-center ">
          <li>
            <SiNodedotjs size="2.5rem" />
            <p>Nodejs</p>
          </li>
          <li>
            <SiExpress size="2.5rem" />
            <p>Express</p>
          </li>
        </ul>
      </div>
      <div className="w-12/12 p-8 bg-white rounded-lg shadow-lg mt-8  text-xl ">
        <h1 className=" text-sky-700">Database</h1>
        <ul className=" flex gap-6 justify-center ">
          <li>
            <SiMongodb size="2.5rem" />
            <p>Mongodb</p>
          </li>
          <li>
            <SiMysql size="2.5rem" />
            <p>MySQL</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;

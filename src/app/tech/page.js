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
} from "react-icons/si";

function page() {
  return (
    <div className=" w-full h-screen">
      <ul className=" flex text-xl">
        <li>
          <SiReact />
          <p>Reactjs</p>
        </li>
        <li>
          <SiTailwindcss />
          <p>TailwindCss</p>
        </li>
        <li>
          <SiJavascript />
          <p>Javascript</p>
        </li>
        <li>
          <SiNodedotjs />
          <p>Nodejs</p>
        </li>
        <li>
          <SiMongodb />
          <p>Mongodb</p>
        </li>
        <li>
          <SiHtml5 />
          <p>Html5</p>
        </li>
        <li>
          <SiCss3 />
          <p>Css3</p>
        </li>
        <li>
          <SiNextdotjs />
          <p>Nextjs</p>
        </li>
        <li>
          <SiRedux />
          <p>Redux</p>
        </li>
        <li>
          <SiExpress />
          <p>Express</p>
        </li>
      </ul>
    </div>
  );
}

export default page;

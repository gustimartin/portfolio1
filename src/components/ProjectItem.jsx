import Link from "next/link";
import Image from "next/legacy/image";
function ProjectItem({ title, bgImg, projectUrl }) {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:hover-bg-gray-950 dark:shadow-lg dark:shadow-gray-700 rounded-md p-4 group hover:bg-gray-900">
      <Image
        src={bgImg}
        alt="/"
        className=" rounded-sm group-hover:opacity-10"
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className=" text-2xl text-white tracking-wider text-center  ">
          {title}
        </h3>
        <p className=" pb-4 pt-2 text-white text-center ">React js</p>
        <Link href={projectUrl}>
          <p className=" text-center p-2 rounded-md bg-gray-200 text-gray-900 font-bold text-lg">
            see more
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;

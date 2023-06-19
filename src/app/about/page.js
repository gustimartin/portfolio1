import react from "react";
function Page() {
  return (
    <div
      id="about"
      className=" w-full md:pt-28 pt-14 h-full sm:h-screen bg-gray-200 p-4 md:p-16 dark:bg-slate-800  "
    >
      <div className=" p-2 md:p-8 bg-white rounded-lg  shadow-2xl dark:shadow-gray-700  text-xl dark:bg-slate-800 shadow-gray-400 ">
        {" "}
        <h1 className=" text-4xl font-bold flex-center text-sky-900 text-center p-8  dark:text-gray-200">
          About Me
        </h1>
        <p className=" flex-center  text-center text-lg  md:text-xl p-2 md:p-6 text-gray-700  dark:text-gray-300">
          {" "}
          Full-stack Developer with over 800 hours of practice at SoyHenry.
          Throughout these 800 hours of practice, I have had the opportunity not
          only to learn new technologies but also to build an individual project
          and a group project, where I learned to work in an organized team.
          Before delving into web development, I worked in construction with
          concrete and farming, from which I learned the value of hard work and
          consistency. I have experienced the satisfaction of working in a team
          with people who share the same goal. That is precisely what I expect
          to find in web development, to be part of a bigger goal and
          experiencing the gratifying feeling of getting the job done.
        </p>
      </div>
    </div>
  );
}

export default Page;

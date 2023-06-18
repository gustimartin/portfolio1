import react from "react";
function Page() {
  return (
    <div
      id="about"
      className=" w-full md:pt-28 pt-10 h-screen bg-gray-200 p-16"
    >
      <div className=" p-8 bg-white rounded-lg  shadow-2xl   text-xl ">
        {" "}
        <h1 className=" text-4xl font-bold flex-center text-sky-900 text-center p-8">
          About Me
        </h1>
        <p className=" flex-center  text-center text-xl p-6 text-gray-700">
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

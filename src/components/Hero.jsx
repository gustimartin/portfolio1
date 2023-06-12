import Image from "next/legacy/image";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto  py-8 bg-gray-200">
      <div className=" relative grid grid-cols-2">
        <div className=" flex-cols  py-12 pl-8 max-w-prose">
          <h1 className="  text-sky-900 text-center  text-6xl font-bold">
            Welcome To
          </h1>
          <br />
          <h2 className=" text-center text-5xl font-semibold  text-sky-900">
            My Personal Portfolio
          </h2>
          <p className=" first-letter:text-5xl first-letter:text-gray-900 text-start text-xl  p-6 text-gray-800">
            Portfolio build with Next js, React js, javascript and Tailwind css
            with a responsive design and a light/Dark feature. Please feel free
            to look around and see my work and my background.
          </p>
        </div>

        <div className=" relative">
          {" "}
          <Image
            src="/hero2.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            className=" rounded-sm shadow-xl"
            // width="800"
            // height="500"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

import Link from "next/link";
import Image from "next/legacy/image";
import React from "react";
import bgImg from "../../../public/thecleanplate.png";

function Page() {
  return (
    <div className="w-full pt-20 dark:bg-slate-800">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bgImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200 z-10 p-2">
          <h2 className="py-2">The Clean Plate</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className=" dark:text-gray-400 p-2">Project</p>
          <h2 className=" dark:text-gray-200">Overview</h2>
          <p className="  dark:text-gray-200">
            The Clean Plate is a group project completed within a period of
            three weeks. In this project, you can purchase high-quality and
            healthy food, search and filter items, add them to your cart, and
            view product details to see if they fit your macros. The admin has
            the ability to delete or update products and suspend user accounts.
            This project taught me the importance of teamwork and improved my
            communication skills. It was a very enjoyable experience.
          </p>
          <Link
            href="https://github.com/gustimartin/final-project-henry"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 dark:bg-gray-400 dark:shadow-lg dark:shadow-gray-700">
              Code
            </button>
          </Link>
          {/* <Link href="https://frontend-pf-seven.vercel.app/" target="_blank">
            <button className="px-8 py-2  dark:bg-gray-400 dark:shadow-lg dark:shadow-gray-700 mt-4">
              Demo
            </button>
          </Link> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg  dark:shadow-gray-700 shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Redux Toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Stripe
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-200">
                Mongodb
              </p>
              <p className="text-gray-600 py-2 flex items-center  dark:text-gray-200">
                Cloudinary
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid gap-1 rounded-sm md:grid-cols-2 lg:grid-cols-3">
        <img
          className="hover:ease-out hover:duration-300
          md:hover:translate-x-28 
          hover:scale-110 md:hover:scale-150 "
          src="home.png"
          alt="dd"
        />
        <img
          className="hover:ease-out hover:duration-200 hover:scale-110 lg:hover:translate-x-0  md:hover:scale-150 md:hover:-translate-x-28"
          src="category.png"
          alt="dd"
        />
        <img
          className="hover:ease-out hover:duration-500 
          h-full hover:scale-110 lg:hover:-translate-x-28  md:hover:scale-150 md:hover:translate-x-28   
          "
          src="/product.png"
          alt="dd"
        />
        <img
          className="hover:ease-out hover:duration-200 hover:scale-110 md:hover:scale-150 lg:hover:translate-x-28 md:hover:-translate-x-28 "
          src="/detail.png"
          alt="dd"
        />
        <img
          className="hover:ease-out hover:duration-200 hover:scale-110 md:hover:scale-150 lg:hover:translate-x-0 md:hover:translate-x-28 "
          src="/shop.png"
          alt="dd"
        />
        <img
          className="hover:ease-out lg:hover:-translate-x-28 hover:duration-200 hover:scale-110 md:hover:scale-150 md:hover:-translate-x-28"
          src="/review.png"
          alt="dd"
        />
        <img
          className="hover:ease-out hover:duration-300 
          md:hover:translate-x-28
           md:hover:scale-150 hover:scale-110"
          src="/contact.png"
          alt="dd"
        />
        <img
          className=" hover:ease-out hover:duration-300
          lg:hover:translate-x-0
         md:hover:-translate-x-28
          md:hover:scale-150 hover:scale-110"
          src="/about.png"
          alt="dd"
        />
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer dark:text-gray-200">Back</p>
      </Link>
    </div>
  );
}

export default Page;

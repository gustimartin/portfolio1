"use client";
import react from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/legacy/image";
import pic from "../../../public/pic.png";
import Link from "next/link";
function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_ctbannr",
        "template_1jwzt0d",
        form.current,
        "LutCavkqEbwKDQ8p_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        toast.success("Email send succesfully", {
          position: "top-left",
        }),
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <div id="contact" className=" w-full h-screen dark:bg-slate-800   ">
      <div className=" max-w-[1240px] m-auto px-2 md:px-6 py-16 w-full h-full">
        <div className=" grid lg:grid-cols-5 gap-8">
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 p-4 rounded-md dark:bg-slate-800 dark:shadow-gray-700">
            <div className="lg:p-4 h-full rounded-md hover:bg-white dark:hover:bg-slate-900">
              <div className=" p-4">
                <Image
                  src={pic}
                  className=" max-h-96 w-full object-cover bg-gray-400 rounded-md hover:scale-105  ease-in duration-300 "
                  alt=""
                />
              </div>
              <div>
                <h2 className=" text-4xl font-semibold py-2  dark:text-gray-200">
                  Gustavo Martin
                </h2>
                <p className=" py-2 text-gray-700 dark:text-gray-400">
                  Fullstack Developer
                </p>
                <p className=" dark:text-gray-200">
                  Thank you for youre interest leave a message and i will get
                  back to you as soon as posible.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8 pb-2 dark:text-gray-200">
                  Let&#39;s Connect
                </p>
                <div className="flex  py-2  item-center md:pt-0 justify-between  p-4  max-w-[330px] m-auto   ">
                  <Link
                    href="https://www.linkedin.com/in/gustavo-martin-b64310263/"
                    target="_blank"
                  >
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:text-gray-200">
                      <BsLinkedin />
                    </div>
                  </Link>
                  <Link href="https://github.com/gustimartin" target="_blank">
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:text-gray-200">
                      <BsGithub />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-md lg:p-4 dark:bg-slate-800 ">
            <div className=" p-1">
              <form
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
                className="justify-center block p-2 md:p-6 py-14 rounded-md  "
              >
                <div className=" justify-center  flex-col  ">
                  <h2 className=" font-bold text-5xl flex justify-center mb-6 text-sky-950  dark:text-gray-200  ">
                    Contact Me
                  </h2>
                </div>
                <div className="form-group p-2 md:p-6  ">
                  <input
                    {...register("user_name", {
                      required: "Username is required",
                      minLength: {
                        value: 3,
                        message: "Username must be atleast 3 charracters long",
                      },
                    })}
                    type="text"
                    className="form-control block
            hover:scale-105
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                   shadow-lg bg-gray-200 dark:bg-gray-400 dark:shadow-gray-700
                    rounded-md shadow-gray-400
                    transition
                    ease-in min-w-full
   "
                    placeholder="Name"
                    name="user_name"
                  />
                  <p className=" text-red-700"> {errors.user_name?.message}</p>
                </div>
                <div className="form-group p-2 md:p-6">
                  <input
                    {...register("user_email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email must be valid",
                      },
                    })}
                    name="user_email"
                    type="email"
                    className="form-control block
                    hover:scale-105
                    dark:bg-gray-400 dark:shadow-gray-700
      w-full
      px-3
      py-1.5
      text-base
      font-normal
     shadow-lg bg-gray-200
      rounded-md shadow-gray-400
      transition
      ease-in duration-300
      "
                    placeholder="Email"
                  />
                  <p className=" text-red-700">{errors.user_email?.message}</p>
                </div>
                <div className="form-group p-2 md:p-6">
                  <textarea
                    {...register("Message", {
                      required: "Message is required",
                      minLength: {
                        value: 15,
                        message: "Message must be atleast 15 charracters long",
                      },
                    })}
                    name="Message"
                    className=" hover:scale-105 
      form-control dark:bg-gray-400 dark:shadow-gray-700
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      bg-gray-200 bg-clip-padding
       shadow-lg shadow-gray-400
      rounded-md
      
     
    "
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                  <p className=" text-red-700"> {errors.Message?.message}</p>
                </div>
                <div className="form-group  text-center p-2 md:p-6">
                  <button
                    type="submit"
                    value="send"
                    className=" text-white font-semibold cursor-pointer p-2 flex justify-center rounded-md shadow-md w-full bg-sky-950 hover:bg-sky-900  mt-1 hover:scale-105 dark:bg-slate-900 dark:text-gray-200 dark:shadow-gray-700 "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

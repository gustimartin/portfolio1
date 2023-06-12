"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function page() {
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
    <div className="h-screen w-full bg-gray-200 ">
      <div className=" relative grid grid-cols-2 py-14 md:flex-col ">
        <div className=" flex-cols  p-14 py-20  ">
          <h1 className=" text-5xl  text-sky-950 text-center  font-bold">
            Thankyou for youre interest
          </h1>
          <p className=" text-start py-12 text-3xl font-semibold  text-gray-800">
            {" "}
            leave a message and i will get back to you as soon as posible.
          </p>
        </div>
        <div
          className="justify-items-start
grid md:flex justify-self-stretch place-content-start
"
        >
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="justify-center block p-6 py-14 rounded-md shadow-xl max-w-md  mt-20 bg-white "
          >
            <div className=" justify-center  flex-col  ">
              <h2 className=" font-bold text-5xl flex justify-center mb-6 text-sky-950  ">
                Contact Me
              </h2>
            </div>
            <div className="form-group mb-6   w-96">
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
      w-full
      px-3
      py-1.5
      text-base
      font-normal    
      
      bg-gray-200
      shadow-md
      rounded
   "
                placeholder="Name"
                name="user_name"
              />
              <p className=" text-red-700"> {errors.user_name?.message}</p>
            </div>
            <div className="form-group mb-6">
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
            
      w-full
      px-3
      py-1.5
      text-base
      font-normal
     shadow-md bg-gray-200
      
      rounded
      transition
      ease-in-out
      m-0"
                placeholder="Email"
              />
              <p className=" text-red-700">{errors.user_email?.message}</p>
            </div>
            <div className="form-group mb-6">
              <textarea
                {...register("Message", {
                  required: "Message is required",
                  minLength: {
                    value: 15,
                    message: "Message must be atleast 15 charracters long",
                  },
                })}
                name="Message"
                className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      bg-gray-200 bg-clip-padding
       shadow-md
      rounded
      
     
    "
                rows="3"
                placeholder="Message"
              ></textarea>
              <p className=" text-red-700"> {errors.Message?.message}</p>
            </div>
            <div className="form-group  text-center mb-6"></div>
            <button
              type="submit"
              value="send"
              className=" text-white cursor-pointer p-2 flex justify-center rounded-md shadow-md w-full bg-sky-950 hover:bg-sky-900  mt-1 hover:translate-x-1 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;

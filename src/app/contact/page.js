function page() {
  return (
    <div className="h-screen w-full bg-gray-200 ">
      <div>
        <div
          className="justify-items-center
grid justify-self-stretch place-content-center
"
        >
          {" "}
          <form className="justify-center block p-6 py-14 rounded-lg  shadow-xl max-w-md  mt-20 bg-white ">
            <div className=" justify-center  flex-col  ">
              <h2 className=" font-bold text-5xl flex justify-center mb-6 text-sky-950  ">
                Contact Me
              </h2>
            </div>
            <div className="form-group mb-6   w-96">
              <input
                // {...register("user_name", {
                //   required: "Username is required",
                //   minLength: {
                //     value: 3,
                //     message: "Username must be atleast 3 charracters long",
                //   },
                // })}
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
              {/* <p className=" text-red-700"> {errors.user_name?.message}</p> */}
            </div>
            <div className="form-group mb-6">
              <input
                // {...register("user_email", {
                //   required: "Email is required",
                //   pattern: {
                //     value:
                //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     message: "Email must be valid",
                //   },
                // })}
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
              {/* <p className=" text-red-700">{errors.user_email?.message}</p> */}
            </div>
            <div className="form-group mb-6">
              <textarea
                // {...register("Message", {
                //   required: "Message is required",
                //   minLength: {
                //     value: 15,
                //     message: "Message must be atleast 15 charracters long",
                //   },
                //   maxLength: {
                //     value: 150,
                //     message: "Message must be less than 150 charracters",
                //   },
                // })}
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
              {/* <p className=" text-red-700"> {errors.Message?.message}</p> */}
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

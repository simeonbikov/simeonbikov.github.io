import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#fdfffc] flex justify-center items-center pt-[60px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full p-4"
      >
        <div className="pb-10">
          {/* <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p> */}
          <p className="text-black text-3xl text-center font-medium">
            {"{ Shoot me a message }"}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="bg-[#fdfffc] text-black border-2 border-black px-8 py-2 m-8 text-lg hover:bg-white mx-auto flex items-center">
          Let's Collaborate
        </button>
        {/* <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button> */}
      </form>
    </div>
  );
};

export default Contact;

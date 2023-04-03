import React, { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_12guxrj",
        "template_ixj5d4m",
        form.current,
        // e.target,
        "mwtotw2Y0ADZswAQS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#fdfffc] flex justify-center items-center pt-[60px]"
    >
      <form ref={form}
      onSubmit={sendEmail}
        // method="POST"
        // action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
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
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" className="bg-[#fdfffc] text-black border-2 border-black px-8 py-2 m-8 text-lg hover:bg-white mx-auto flex items-center">
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

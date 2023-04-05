import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_12guxrj",
        "template_ixj5d4m",
        form.current,
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
    setIsMessageSent(true);
  };
  return (
    <div
      id="contact"
      className="w-full h-screen bg-light1 flex justify-center items-center pt-[60px]"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full p-4"
      >
        <div className="pb-10">
          <p className="text-dark1 text-2xl sm:text-3xl text-center font-medium">
            {"{ Shoot me a message }"}
          </p>
        </div>
        {isMessageSent && (
          <div className="pb-10">
            <p className="text-[#38b000] text-2xl sm:text-3xl text-center font-medium">
              Thank You for your message!
            </p>
          </div>
        )}

        <input
          className="bg-light2 p-2 border-2 border-dark2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 bg-light2 p-2 border-2 border-dark2"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-light2 p-2 border-2 border-dark2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-light1 text-dark1 border-2 border-dark1 hover:bg-dark1 hover:text-light1 px-8 py-2 m-8 text-lg mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

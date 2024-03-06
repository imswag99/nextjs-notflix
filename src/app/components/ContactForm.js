'use client';

import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setUser(prev => ({...prev, [name] : value}));
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response  = await fetch('/api/contact', {
        method: "POST",
        headers: {"Content_Type": "application/json"},
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      });

      // Set the status based on the response from the API route
      if(response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        });
        setStatus("success");
      } else {
        setStatus("error");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-[20%] p-6 bg-red-200 text-sm flex flex-col gap-4 rounded-lg shadow-md shadow-gray-300"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1 text-left">
        <label>Name</label>
        <input
          className="p-2 text-xs"
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
          autoComplete="off"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col gap-1 text-left">
        <label>Email</label>
        <input
          className="p-2 text-xs"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          autoComplete="off"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-1 text-left">
        <label>Phone</label>
        <input
          className="p-2 text-xs"
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          required
          autoComplete="off"
          placeholder="Enter your phone no."
        />
      </div>
      <div className="flex flex-col gap-1 text-left">
        <label>Message</label>
        <textarea
          name="message"
          value={user.message}
          onChange={handleChange}
          required
          autoComplete="off"
          className="p-2 text-xs"
          placeholder="Write something..."
        />
      </div>
      {status === "success" && <p className="my-2 uppercase font-semibold text-green-700">thank you for your message</p>}
      {status === "error" && <p className="my-2 uppercase font-semibold text-red-900">there was an error submitting your form</p>}
      <button
        type="submit"
        className="w-[40%] py-2 bg-gray-700 text-white text-sm rounded-3xl transition-all hover:bg-red-800"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;

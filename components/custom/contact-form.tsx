"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted
  const [error, setError] = useState(""); // Track if there was an error during submission

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading state when the form is submitted

    emailjs
      .send(
        serviceID, 
        templateID || "", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true); // Set the form as successfully submitted
        setLoading(false); // Stop loading state
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setError("Failed to send the message. Please try again."); // Set the error state
        setLoading(false); // Stop loading state
      });

    setFormData({ name: "", email: "", message: "" });
  };

  if (loading) {
    return (
      <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70">
        <h2 className="text-2xl font-semibold text-center text-zinc-800">Sending...</h2>
        <p className="text-center text-zinc-600 mt-4">
          Please wait while we process your message.
        </p>
      </div>
    );
  }
  if (submitted) {
    return (
      <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70">
        <h2 className="text-2xl font-semibold text-center text-zinc-800">
          Thank you!
        </h2>
        <p className="text-center text-zinc-600 mt-4">
          Your message has been sent successfully. We'll get in touch soon.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70">
        <h2 className="text-2xl font-semibold text-center text-zinc-800">
          Oops!
        </h2>
        <p className="text-center text-red-600 mt-4">{error}</p>
        <button
          className="mt-5 btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow"
          onClick={() => setError("")}
        >
          Try Again
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm text-zinc-800 font-medium mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              className="form-input text-sm w-full"
              type="text"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm text-zinc-800 font-medium mb-2"
              htmlFor="email"
            >
              Work Email
            </label>
            <input
              id="email"
              name="email"
              className="form-input text-sm w-full"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="channel">
              How did you hear about us?
            </label>
            <select
              id="channel"
              className="form-select w-full"
              required
              onChange={handleChange}
            >
              <option value="Social media">Social media</option>
              <option value="Online search">Online search</option>
              <option value="In-person">In-person</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea text-sm w-full"
              rows={4}
              placeholder="Let us know..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow"
          >
            Get in touch
          </button>
        </div>
      </form>
      <div className="text-center mt-6">
        <div className="text-xs text-zinc-500">
          By submitting you agree we can contact you.
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

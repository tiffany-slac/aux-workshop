"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "name") {
      setErrors((prev) => ({
        ...prev,
        name: value.trim() ? "" : "Name is required.",
      }));
    }

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: value.trim()
          ? /^\S+@\S+\.\S+$/.test(value)
            ? ""
            : "Enter a valid email address."
          : "Email is required.",
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required.",
      email: formData.email.trim()
        ? /^\S+@\S+\.\S+$/.test(formData.email)
          ? ""
          : "Enter a valid email address."
        : "Email is required.",
    };

    setErrors(newErrors);
    if (newErrors.name || newErrors.email) return;

    try {
      await emailjs.send(
        "service_qxv7ns8",
        "template_x2ltkte",
        formData,
        "IDsUf6oSbAyhN7Y9Z"
      );

      toast.success("Message sent successfully!", { autoClose: 2000 });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <main className="bg-white">
      <ToastContainer position="top-right" />

      {/* Hero */}
      <section className="h-[60vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Organizers
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl">
          This workshop is a collaborative effort between INL, FNAL, and SLAC,
          aimed at fostering knowledge sharing and improving operational
          efficiency.
        </p>
      </section>

      {/* Info + Logos */}
      <section className="py-12 px-6 flex flex-col items-center text-center">
        <p className="text-lg text-gray-700 max-w-3xl mb-6">
          Launched in 2025, this initiative focuses on the importance of UI/UX
          at accelerator facilities. We are currently in early planning stages
          and will share more following our first preliminary meeting.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-10">
          <Image
            src={`/fnal.jpg`}
            alt={`fnal logo`}
            width={160}
            height={100}
            className="object-cover rounded-lg shadow-lg"
          />
          <Image
            src={`/inl.png`}
            alt={`inl logo`}
            width={160}
            height={100}
            className="object-cover rounded-lg shadow-lg"
          />
          <Image
            src={`/slac.svg`}
            alt={`slac logo`}
            width={160}
            height={100}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-100 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg"
        >
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1e88b6] text-white py-3 rounded hover:bg-[#1565a6] transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

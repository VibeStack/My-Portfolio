import React, { useContext, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { ScrollContext } from "../context/scrollContext";

export default function Contact() {
  const { sectionRefs } = useContext(ScrollContext);
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [userDetails, setUserDetails] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const validateForm = (formData) => {
    const errorsData = {};

    if (!formData.user_name.trim()) {
      errorsData.nameError = "Enter User's Name!";
    }

    const email = formData.user_email.trim();

    if (email === "") {
      errorsData.emailError = "Please enter your email!";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(email);

      if (!isValidEmail) {
        errorsData.emailError =
          "Please enter a valid email (e.g., bonniegreen@gmail.com)";
      }
    }

    if (!formData.message.trim()) {
      errorsData.messageError = "Enter Your Message!";
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleForm = (e) => {
    e.preventDefault();

    const validateResult = validateForm(userDetails);
    const hasErrors = Object.keys(validateResult).length > 0;

    if (hasErrors) {
      toast.error("Please fix the errors before submitting!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      const newUserDetails = { ...userDetails };
      if (validateResult.nameError) newUserDetails.user_name = "";
      if (validateResult.emailError) newUserDetails.user_email = "";
      if (validateResult.messageError) newUserDetails.message = "";
      setUserDetails(newUserDetails);

      return;
    }

    emailjs
      .sendForm("service_1olx4s4", "template_i2b6s29", form.current, {
        publicKey: "QGfNo54TLUVSjlAf4",
      })
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message Sent Successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Error Sending Message", error);
          toast.error("Failed To Send Message. Please Try Again", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
    console.log(isSent);
    setUserDetails({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <section
      ref={sectionRefs.contact}
      id="contact"
      className="relative w-full bg-[#0d0d11] text-white pt-20 pb-28 font-['Nunito'] overflow-hidden"
    >
      <ToastContainer theme="dark" />

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-150 h-125 bg-purple-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/4 border border-purple-500/30 backdrop-blur-md mb-4 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-purple-200/90 font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['League_Spartan'] mb-4">
            <span className="bg-linear-to-r from-white via-purple-100 to-[#c77dff] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind, an opportunity to discuss, or simply want to say hello? Send me a message below.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleForm}
            ref={form}
            className="rounded-3xl p-6 sm:p-10 md:p-12 bg-white/3 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl shadow-[0_0_50px_rgba(157,78,221,0.1)] transition-all duration-500 text-left space-y-6"
          >
            {/* Username Input */}
            <div>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-purple-200 font-semibold"
              >
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="website-admin"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/60 focus:border-purple-400 hover:border-white/30 transition-all duration-300 text-sm sm:text-base"
                  placeholder="e.g. Alex Morgan"
                  name="user_name"
                  value={userDetails.user_name}
                  onChange={handleChange}
                />
              </div>
              {errors.nameError && (
                <p className="text-red-400 text-xs mt-1.5 font-mono">
                  {errors.nameError}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="website-email"
                className="block mb-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-purple-200 font-semibold"
              >
                Your Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="website-email"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/60 focus:border-purple-400 hover:border-white/30 transition-all duration-300 text-sm sm:text-base"
                  placeholder="e.g. alex@example.com"
                  name="user_email"
                  value={userDetails.user_email}
                  onChange={handleChange}
                />
              </div>
              {errors.emailError && (
                <p className="text-red-400 text-xs mt-1.5 font-mono">
                  {errors.emailError}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-purple-200 font-semibold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/60 focus:border-purple-400 hover:border-white/30 transition-all duration-300 text-sm sm:text-base resize-none"
                placeholder="Share your thoughts, project details, or inquiries..."
                name="message"
                value={userDetails.message}
                onChange={handleChange}
              ></textarea>
              {errors.messageError && (
                <p className="text-red-400 text-xs mt-1.5 font-mono">
                  {errors.messageError}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-linear-to-r from-[#7b2cbf] via-[#9d4edd] to-[#c77dff] hover:from-[#9d4edd] hover:to-[#e0aaff] shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(224,170,255,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 border border-white/30 overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span className="relative z-10 text-base tracking-wide">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

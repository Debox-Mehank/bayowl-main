import type { NextPage } from "next";
import Banner from "../components/reusable/Banner";
import { MouseEvent, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "../components/reusable/Button";

const Contact: NextPage = () => {
  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if (
      !contactFormData.email ||
      !contactFormData.fullName ||
      !contactFormData.message ||
      !contactFormData.phone
    ) {
      toast.error("Please provide all the details!");
      return;
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        contactFormData.email.toString()
      )
    ) {
      toast.error("Please provide valid email id");
      return;
    }

    if (!/^[0-9]{10}$/.test(contactFormData.phone)) {
      toast.error("Please provide valid phone number");
      return;
    }

    try {
      const request = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contactForm`,
        {
          fullname: contactFormData.fullName,
          email: contactFormData.email,
          message: contactFormData.message,
          phone: contactFormData.phone,
        }
      );
      const response = request.data;
      if (response) {
        toast.success("Your request has been received!");
        setContactFormData({ fullName: "", email: "", phone: "", message: "" });
        return;
      }
    } catch (error: any) {
      toast.error("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="bg-darkBlue text-white">
      <Banner title="Contact" />
      <div className="grid place-items-center gap-4 text-center items-start grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 py-10 align-top">
          <a href="https://g.page/bayowlstudios">
            <svg
              className="fill-primary block mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </a>
          <h4 className="font-bold text-xl">Address</h4>
          <div className="">
            <a href="https://g.page/bayowlstudios">
              <h4>Bay Owl Studios</h4>
              601 Multilink House, 3rd Road, Khar West,
              <span className="block">Mumbai, Maharashtra, India</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10 align-top">
          <svg
            className="fill-primary block mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <h4 className="font-bold text-xl">Hours</h4>
          <div className="">
            <h4 className="">
              {"Office Hours : Monday to Saturday | 10 am – 7 pm"}
            </h4>
            <h4>{"Session Timings : Open 24 x 7"}</h4>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10 align-top">
          <a href="tel:+91 86919 72282">
            <svg
              className="fill-primary block mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </a>
          <a href="tel:+91 86919 72282">
            <h4 className="font-bold text-xl">Sound us out</h4>
          </a>
          <div>
            <a className="block" href="mailto:manager@bayowlstudios.com">
              {"Email: manager@bayowlstudios.com"}
            </a>
            <a href="tel:+91 86919 72282">Phone: +91 86919 72282</a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 items-center">
          <div className="absolute animation-delay-2000 top-1/3 left-[20%] w-32 md:w-96 h-60 bg-blueGradient-0 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden" />
          <div className="absolute animation-delay-4000 top-1/3 left-[5%] w-32 md:w-80 h-60 bg-orange3 rounded-full mix-blend-screen filter blur-[100px] opacity-90 animate-blob overflow-hidden" />
          <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto space-y-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7541.693154882908!2d72.839609!3d19.070482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62bd844b9af66222!2sBay%20Owl%20Studios!5e0!3m2!1sen!2sus!4v1659125806069!5m2!1sen!2sus"
                className="w-[28rem] filter border-0 invert-[0.9] max-w-full rounded-2xl shadow-2xl shadow-white"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-orange1 to-orange3 mb-4">
                Leave us a message.
              </h2>
              <form method="POST" className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    value={contactFormData.fullName}
                    onChange={(e) =>
                      setContactFormData((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="bg-white/10 filter backdrop-blur-3xl block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    value={contactFormData.email}
                    onChange={(e) =>
                      setContactFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="bg-white/10 filter backdrop-blur-3xl block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    value={contactFormData.phone}
                    onChange={(e) =>
                      setContactFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="bg-white/10 filter backdrop-blur-3xl block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    value={contactFormData.message}
                    onChange={(e) =>
                      setContactFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-white/10 filter backdrop-blur-3xl block w-full shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    placeholder="Message"
                    // defaultValue={''}
                  />
                </div>
                <div className="w-max">
                  <Button onClick={(e) => handleSubmit(e)}>
                    <>Submit</>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

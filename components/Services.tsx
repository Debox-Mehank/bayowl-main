import React from "react";
import Image from "next/image";
import Service1 from "../public/Services/Recordings.png";
import Service2 from "../public/Services/2postprod.jpg";
import Service3 from "../public/Services/Music Production.jpg";
import Service4 from "../public/Services/4coordination.jpg";
import Service5 from "../public/Services/Shoots & Livestreams.jpg";
import Link from "next/link";
import Heading from "./reusable/Heading";
import SmallBtn from "./reusable/SmallBtn";

const serviceList = [
  {
    img: Service1,
    title: "Recordings",
    desc: "Vocals, instruments, full bands or any kind of recording you need.",
    route: "/studio-services#Recordings",
  },
  {
    img: Service2,
    title: "Audio Post",
    desc: "Mixing, Mastering, Sound Design, Editing and more.",
    route: "/studio-services#Post_Production_Music",
  },
  {
    img: Service3,
    title: "Music Production",
    desc: "Original Music for commercials, films, songs or anything else you need it for.",
    route: "/studio-services#Music_Production",
  },
  {
    img: Service4,
    title: "Session Artist Coordination",
    desc: "Whether you need a voice artist or an instrumentalist, we've got you covered.",
    route: "/studio-services#Session_Artist_Coordination",
  },
  {
    img: Service5,
    title: "Shoots",
    desc: "Have your video and photo shoots in any of the studios, or book the entire facility if needed!",
    route: "/studio-services#Video_Photo",
  },
];

function Services() {
  return (
    <section className="bg-darkBlue text-white text-center">
      {/* Shapes to be in the above section div */}
      <div className="max-w-7xl w-11/12 mx-auto py-10  relative">
        <div className="absolute animation-delay-2000 top-1/3 left-[23%] w-32 md:w-96 h-96 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden" />
        <div className="absolute animation-delay-4000 top-1/3 right-[24%] w-32 md:w-80 h-80 bg-orange3 rounded-full mix-blend-screen filter blur-[100px] opacity-90 animate-blob overflow-hidden" />
        <div className="absolute top-[52%] left-[40%] w-32 md:w-96 h-96 bg-blueGradient-0 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden" />
        {/* <h3 className='text-center text-3xl py-2'>What we do</h3> */}
        {/* <h3 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-accent'>Studio Services</h3> */}
        <Heading title="Studio Services" />
        <div className="flex flex-wrap justify-center gap-10 py-10 opacity-1">
          {serviceList.map((service, idx) => (
            <div
              key={service.title}
              className="max-w-sm  transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-3xl bg-white/5 rounded-lg shadow-xl outline-8 outline-white"
            >
              <Link href={service.route}>
                <div className="hidden md:block max-h-52 overflow-clip">
                  <Image
                    objectFit="cover"
                    className="cursor-pointer rounded-t-lg"
                    src={service.img}
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link href={service.route}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {service.title}
                  </h5>
                </Link>

                <p className="mb-4 font-normal text-gray-50 opacity-80">
                  {service.desc}
                </p>
                <Link href={"/studio-services"}>
                  <span className="z-40">
                    <SmallBtn>
                      <>Read More</>
                    </SmallBtn>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

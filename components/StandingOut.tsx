import React from "react";
import Image from "next/image";
import speakers from "../public/StandingOut/speakers.jpg";
import guitar from "../public/StandingOut/guitar.png";
import pulseWaves from "../public/StandingOut/pulseWaves.png";
import gif from "../public/StandingOut/speakergif.gif";
import Heading from "./reusable/Heading";
// USP SVGs

import rehearsalSpace from "./icons/rehearsalSpace";
import analogGear from "./icons/analogGear";
import multipleStudios from "./icons/multipleStudios";
import customBookings from "./icons/customBookings";
import centralLocation from "./icons/centralLocation";
import chilledSessions from "./icons/chilledSessions";

const uspList = [
  {
    svg: rehearsalSpace,
    title: "Rehearsal Space",
    desc: "The jam room can easily entertain groups of 20-50 people.",
  },
  {
    svg: analogGear,
    title: "High End Analog Gear",
    desc: "API Box II Consoles in each studio enables the legendary all-discrete API sound.",
  },
  {
    svg: multipleStudios,
    title: "Multiple Studios",
    desc: "Three professional studios to choose from depending on your requirement.",
  },
  {
    svg: customBookings,
    title: "Customisable Bookings",
    desc: "We offer package deals for long term projects.",
  },
  {
    svg: centralLocation,
    title: "Central Location",
    desc: "A stones throw from Khar station makes our studio easily accessible by any mode of transport.",
  },
  {
    svg: chilledSessions,
    title: "Chilled Sessions",
    desc: "Plenty of books, board games, a Playstation 4 and a TT Table give you enough options to relax between sessions.",
  },
];

function StandingOut() {
  return (
    <section className="bg-darkBlue ">
      <div className="text-white py-10 mx-auto max-w-7xl relative">
        <Heading title="Standing out in the crowd" />
        <div className="absolute animation-delay-2000 top-[20%] left-[23%] w-36 md:w-80 h-56 bg-blueGradient-0 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden" />
        <div className="absolute animation-delay-4000 top-[20%] right-[24%] w-36 md:w-80 h-56 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[100px] opacity-90 animate-blob overflow-hidden" />
        <div className="absolute top-[42%] left-[40%] w-36 md:w-80 h-72 bg-orange3 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden" />

        <div className="hidden md:flex md:flex-row justify-center items-center align-bottom gap-8 text-center">
          <div className="flex flex-col gap-20 items-center w-1/3">
            {uspList.slice(0, 3).map((usp, idx) => (
              <div key={idx} className="h-1/3">
                {usp.svg ? usp.svg() : null}
                <h4 className="font-bold text-xl">{usp.title}</h4>
                <p>{usp.desc}</p>
              </div>
            ))}
          </div>
          <div className="hidden z-10 md:block relative w-1/3">
            <div className="text-center">
              <Image className="w-full h-full" unoptimized={true} src={gif} />
            </div>
            {/* <div className='bg-pulse h-96' /> */}
            {/* <img src="/public/StandingOut/pulseWaves.png" className='inline mt-20 h-40 z-50 w-10' alt="" /> */}
          </div>
          <div className="flex flex-col gap-20 items-center w-1/3">
            {uspList.slice(3, 6).map((usp, idx) => (
              <div key={idx} className="h-1/3">
                {usp.svg ? usp.svg() : null}
                <h4 className="font-bold text-xl">{usp.title}</h4>
                <p>{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Phone Layout */}
        <div className="md:hidden text-center space-y-10 w-11/12 mx-auto py-10">
          {uspList.slice(0, 6).map((usp, idx) => (
            <div key={idx} className="">
              {usp.svg ? usp.svg() : null}
              <h4 className="font-bold text-xl">{usp.title}</h4>
              <p>{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandingOut;

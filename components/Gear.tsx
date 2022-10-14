import React, { useState, useRef, useEffect } from "react";
import EssentialButton from "./reusable/EssentialButton";
import Image, { StaticImageData } from "next/image";

import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

import mic from "../public/Gear/mic.jpeg";
import monitors from "../public/Gear/monitors.png";
import outboard from "../public/Gear/outboard.png";
import software from "../public/Gear/software.png";
import amps from "../public/Gear/amps.png";
import Heading from "./reusable/Heading";

interface SubGear {
  subCat: string;
  list: Array<string>;
}

interface GearData {
  title: string;
  body: Array<SubGear>;
  img: StaticImageData;
  mobScrollXValue: number;
}

const data: GearData[] = [
  {
    title: "Microphones",
    body: [
      {
        subCat: "Condenser",
        list: [
          "Telefunken TF-47 (Vintage Vaccum Tube)",
          "Telefunken TF-51 (Modern Vaccum Tube)",
          "Neumann U87ai FET",
          "Neumann 103 FET",
          "AKG C414 XLII x2",
          "Telefunken M-60 FET x2",
        ],
      },
      {
        subCat: "Dynamic",
        list: [
          "Shure SM-7B",
          "Shure SM-58 x6",
          "Shure SM-57 x2",
          "Dr. Aliensmith Dirt Mic",
          "Dr. Aliensmith Sub Kick",
          "Telefunken M-82",
          "Telefunken M-81 SH x3",
          "Telefunken M-80 SH",
          "Sennheiser e609",
          "Sennheiser e906",
        ],
      },
    ],
    img: mic,
    mobScrollXValue: 0,
  },
  {
    title: "Monitors",
    body: [
      {
        subCat: "Speakers",
        list: [
          "Adam S5H",
          "Focal Shape 65",
          "Adam S2V",
          "Focal Trio11be",
          "JBL EON 15",
        ],
      },
      {
        subCat: "Headphones",
        list: [
          "Shure SRH1840",
          "Beyer Dynamics DT 770 Pro",
          "Beyer Dynamics DT 990 Pro",
          "Sennheiser HD200 Pro x 6",
          "AKG K92",
          "Behringer HPS 3000 x10",
        ],
      },
    ],
    img: monitors,
    mobScrollXValue: 100,
  },
  {
    title: "Outboard Gear",
    body: [
      {
        subCat: "Outboard Gear",
        list: [
          "API The BOX II Console x2",
          "Manley Voxbox Tube Channelstrip",
          "UAD LA-610 MkII Tube Channelstrip",
          "ART Pro VLA II Stereo Compressor",
          "Audient ASP880 Preamp",
          "Avid HD IO x2",
          "Avid HD Native Thunderbolt x2",
          "Presonus AR16C",
        ],
      },
    ],
    img: outboard,
    mobScrollXValue: 200,
  },
  {
    title: "Licensed Software",
    body: [
      {
        subCat: "DAWs",
        list: [
          "Pro Tools Ultimate",
          "Presonus Studio One",
          "Ableton Lite",
          "Logic Pro X",
        ],
      },
      {
        subCat: "Mixing & Mastering",
        list: [
          "FabFilter",
          "Plugin Alliance",
          "Slate",
          "Izotope",
          "Tube-Tech",
          "Oxford",
          "Soundspot Mastering",
          "Softube",
          "Sonible Studio",
          "Wavesfactory",
          "Waves",
        ],
      },

      {
        subCat: "Production",
        list: [
          "NI Komplete 13 Ultimate",
          "Arturia V Collection 7",
          "SoundToys",
          "Soundly Pro",
          "Antares",
          "Celemony Melodyne",
          "Valhalla",
          "WA Production",
          "Cableguys",
          "Glitchmachines",
        ],
      },
    ],
    img: software,
    mobScrollXValue: 350,
  },
  {
    title: "Amps & Instrumentals",
    body: [
      {
        subCat: "Guitar",
        list: [
          "Marshall Code 100H Amp Head",
          "Marshall 4x12 Guitar Cab",
          "Fender Mustang GT200 2x12 Combo",
          "Kramer Striker 911 Vintage Series Electric Guitar",
          "Granada Rosewood Acoustic",
        ],
      },
      {
        subCat: "Drums",
        list: [
          "Shells - Mapex Mars 5 piece",
          `Hi Hat - Zildjian 14"`,
          `Crash Ride - Meinl 18"`,
          `Ride - Sabian SBR 20"`,
          `Throne - Pearl D930`,
        ],
      },
      {
        subCat: "Bass",
        list: [
          "Hartke LH-500 Bass Head",
          "Laney R410 Bass Cab",
          "Hartke HD50 Bass Combo",
        ],
      },
      {
        subCat: "Keys",
        list: [
          "Novation Impulse 61 Midi Keyboard",
          "Arturia Microlab MkII 25 Midi Controller",
        ],
      },
    ],
    img: amps,
    mobScrollXValue: 350,
  },
];

const Essentials = () => {
  const horizontalScrollDiv = useRef<HTMLHeadingElement>(null);
  const [selected, setSelected] = useState(0);
  const [swiper, setSwiper] = useState<any>();

  return (
    <section id="gear" className="bg-darkBlue text-white py-10 pb-20">
      <div className="max-w-7xl mx-auto w-11/12 flex justify-center items-center flex-col gap-8 select-none relative">
        <Heading title="Gear" />
        <div className="absolute overflow-hidden animation-delay-2000 top-[15%] left-[10%] w-24 md:w-96 h-96 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-blob -z-0" />
        <div className="absolute overflow-hidden animation-delay-4000 top-[20%] left-[30%] w-24 md:w-80 h-80 bg-orange2 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob -z-0" />
        <div className="absolute overflow-hidden bottom-[1%] left-[5%] w-24 md:w-96 h-96 bg-blueGradient-1 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob -z-0" />

        {/* Buttons */}
        {/* flex flex-col md:flex-row gap-0.5 md:gap-6 justify-center items-center xl:px-16 lg:px-8 z-10 */}
        <div
          ref={horizontalScrollDiv}
          className="flex flex-row gap-1 md:gap-6 md:justify-center md:items-center xl:px-16 lg:px-8 z-10 whitespace-nowrap overflow-x-auto w-screen md:w-auto pb-5 px-2 scrollbar-hide"
        >
          {data.map((essential, idx) => {
            return (
              <EssentialButton
                key={idx}
                title={essential.title}
                onClick={() => {
                  swiper.slideTo(idx);
                  horizontalScrollDiv.current?.scroll({
                    top: 0,
                    left: essential.mobScrollXValue,
                    behavior: "smooth",
                  });
                }}
                active={swiper ? swiper.activeIndex === idx : false}
              />
            );
          })}
        </div>
        <div className="flex w-full relative">
          <Swiper
            pagination={false}
            centeredSlides={true}
            slidesPerView={1}
            onSlideChange={(swiper) => setSelected(swiper.activeIndex)}
            onSwiper={(s) => setSwiper(s)}
            className="relative"
          >
            {data.map((essential, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div
                    className={`flex flex-col lg:flex-row gap-8 md:gap-0 text-center justify-center items-center -mb-2 md:-mb-10`}
                    // grid grid-cols-1 md:grid-cols-essential lg:grid-cols-essential xl:grid-cols-essential gap-10 px-4 md:px-32 lg:px-40 xl:px-48 py-10
                  >
                    {/* Desktop */}
                    <div
                      className="flex justify-center items-center w-1/3 h-40 relative"
                      style={{ animation: "fadeUp .4s" }}
                    >
                      <Image
                        src={essential.img}
                        alt={essential.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div
                      className="flex justify-center flex-col items-start h-fit gap-2 w-2/3"
                      style={{ animation: "fadeLeft .4s linear .4s backwards" }}
                    >
                      {essential.body.map((gearSubCategory, idx) => (
                        <div className="w-full" key={gearSubCategory.subCat}>
                          <h1 className="text-left font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-orange1 via-orange2 to-orange3">
                            {gearSubCategory.subCat}
                          </h1>
                          <ul className="text-left items-center justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
                            {gearSubCategory.list.map((gearItem) => (
                              <li
                                key={gearItem}
                                className="flex items-start gap-2"
                              >
                                <span className="md:w-1/12">
                                  <svg
                                    className="inline fill-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                  </svg>
                                </span>
                                <span className="md:w-11/12 text-">
                                  {gearItem}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Essentials;

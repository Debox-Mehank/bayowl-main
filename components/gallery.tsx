import { NextPage } from "next";
import Image from "next/image";
import Heading from "./reusable/Heading";
import Banner from "./reusable/Banner";
import Button from "./reusable/Button";
import { useState } from "react";
import { buffer } from "stream/consumers";

const categories = [
  "Facility",
  "Artists @bayowlstudios",
  "Sessions",
  "Rehearsals",
  "Live Steams & Shoots",
  "Chill Scenes",
];

const Gallery: NextPage = () => {
  const [activeCat, setActiveCat] = useState("Facility");

  return (
    <div className="bg-darkBlue text-white">
      <Banner title="Gallery" />
      <div className="relative pb-32 overflow-hidden space-y-6 max-w-7xl mx-auto pt-12">
        <div className="flex justify-center text-center gap-4 w-full mx-auto">
          {categories.map((cat) => (
            <div key={cat} className="w-fit">
              <Button
                onClick={() => setActiveCat(cat)}
                active={activeCat === cat}
              >
                <div>{cat}</div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

export async function getStaticProps() {
  console.log(process.env.CLOUDINARY_API_SECRET);
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((res) => res.json());
  console.log(results);
  return {
    props: {},
  };
}

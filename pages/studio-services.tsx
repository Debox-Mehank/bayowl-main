import Banner from "../components/reusable/Banner";
import Image from "next/image";

import SeshCoord from "../public/Services/4coordination.jpg";
import Video from "../public/Services/Shoots & Livestreams.jpg";
import Workshops from "../public/Services/Workshops & Classes.jpg";

// import MusicProd from "../public/Services/MusicProd.jpg"
import Heading from "../components/reusable/Heading";

import Rehearsals from "../public/Services/Rehearsals.jpg";
import Recording from "../public/Services/Recordings.png";
import AudioPostMusic from "../public/Services/Audio Post for Music.png";
import FilmProd from "../public/Services/audio post for film.jpeg";
import MusicProd from "../public/Services/Music Production.jpg";

const serviceList = [
  {
    img: Rehearsals,
    id: "Rehearsals",
    title: "Rehearsals",
    content() {
      return (
        <div className="space-y-3">
          <div>
            Our Bay Owl Jam Room is one of the largest rehearsal rooms in the
            city, that too at a truly affordable price. We have comfortably
            accomodated ensembles of 20-25 artists.
          </div>
          <div>
            Powered by some of the best gear, our rehearsal space can cater to
            any rehearsal requirement that you may have!
          </div>
        </div>
      );
    },
  },
  {
    img: Recording,
    id: "Recordings",
    title: "Recordings",
    content() {
      return (
        <div className="space-y-3">
          <div>Three studios, three different sized live rooms!</div>
          <div>
            Whatever your recording requirement, we can accomodate. Whether full
            bands or just vocals, ensembles or solo instruments, ADR for film or
            podcasts and audiobooks, we can record it all.
          </div>
          <div>
            Powered by two API consoles, along with some great microphones and
            outboard gear, get crystal clear recorded representations of your
            live performance!
          </div>
        </div>
      );
    },
  },
  {
    img: AudioPostMusic,
    id: "Audio_Post_Music",
    title: "Audio Post for Music",
    content() {
      return (
        <ul className="list-disc space-y-2 pl-10">
          <li>Vocal Tuning</li>
          <li>Vocal/instrument time correction</li>
          <li>{"Noise cleanup"}</li>
          <li>{"Instrument resampling"}</li>
          <li>Mix</li>
          <li>Master</li>
        </ul>
      );
    },
  },
  {
    img: FilmProd,
    id: "Audio_Post_Film",
    title: "Audio Post for Film / OTT / Podcasts / Audiobooks",
    content() {
      return (
        <ul className="list-disc space-y-2 pl-10">
          <li>{"Foley, ambience & creative sound design"}</li>
          <li>{"Shoot dialogue detailed cleanup"}</li>
          <li>{"Audio editing"}</li>
          <li>{"ADR post sync"}</li>
          <li>{"Film Mix & Master"}</li>
        </ul>
      );
    },
  },
  {
    img: MusicProd,
    id: "Music_Production",
    title: "Music Production",
    content() {
      return (
        <ul className="list-disc space-y-2 pl-10">
          <li>{"Original music for your project!"}</li>
          <li>{"Commercial Jingles"}</li>
          <li>{"Song production"}</li>
          <li>{"Background score"}</li>
          <li>{"Brand audio signature"}</li>
        </ul>
      );
    },
  },
  {
    img: SeshCoord,
    id: "Session_Artist_Coordination",
    title: "Session Artist Coordination",
    content() {
      return (
        <ul className="list-disc space-y-2 pl-10">
          <li>{"Voice overs"}</li>
          <li>{"Guitarists"}</li>
          <li>{"Drummers"}</li>
          <li>{"Bassist"}</li>
          <li>{"Any other instrument or artist requirement"}</li>
        </ul>
      );
    },
  },
  {
    img: Video,
    id: "Shoots_Livestreams",
    title: "Shoots & Livestreams",
    content() {
      return (
        <ul className="list-disc space-y-2 pl-10">
          <li>{"Livestreams"}</li>
          <li>{"Band Photo Shoots"}</li>
          <li>{"Music Videos"}</li>
          <li>{"Session BTS"}</li>
          <li>{"Green Screen Auditions"}</li>
        </ul>
      );
    },
  },
  {
    img: Workshops,
    id: "Workshops_Classes",
    title: "Workshops & Classes",
    content() {
      return (
        <ul className="list-disc space-y-2 pl-10">
          <li>{"Voice Over Workshops"}</li>
          <li>{"Drum Classes"}</li>
          <li>{"Guitar Classes"}</li>
          <li>{"Request a specific instrument class."}</li>
          <li>{"Conduct your own workshop."}</li>
        </ul>
      );
    },
  },
];

export default function StudioServices() {
  return (
    <div className="bg-darkBlue text-white">
      <Banner title="Studio Services" />

      <div className="relative pb-32 overflow-hidden space-y-10">
        <div className="py-10">
          <div className="mx-auto text-center">
            <Heading title="What we do" />
            <p className="text-xl py-4">
              Bay Owl Studios is your one stop shop for anything audio!
            </p>
          </div>
        </div>
        {serviceList.map((service, idx) => {
          if (!(idx % 2)) {
            return (
              <div className="relative" id={service.id}>
                <div className="absolute overflow-hidden animation-delay-2000 top-[15%] right-[10%] w-24 md:w-96 h-96 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-blob -z-0" />
                <div className="absolute overflow-hidden animation-delay-4000 top-[20%] right-[30%] w-24 md:w-80 h-80 bg-orange2 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob -z-0" />
                <div className="absolute overflow-hidden bottom-[1%] right-[5%] w-24 md:w-96 h-96 bg-blueGradient-1 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob -z-0" />
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 place-items-center">
                  <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                      <div className="mt-6">
                        <h2
                          tabIndex={0}
                          className="text-3xl font-extrabold tracking-tight text-primary"
                        >
                          {service.title}
                        </h2>
                        <div className="text-lg mt-6 text-justify">
                          {service.content()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                      {/* <img
                                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"jj
                                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                                alt="Inbox user interface"
                                            /> */}
                      <Image
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={service.img}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="relative" id={service.id}>
                <div className="absolute overflow-hidden animation-delay-2000 top-[15%] left-[10%] w-24 md:w-96 h-96 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-blob -z-0" />
                <div className="absolute overflow-hidden animation-delay-4000 top-[20%] left-[30%] w-24 md:w-80 h-80 bg-orange2 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob -z-0" />
                <div className="absolute overflow-hidden bottom-[1%] left-[5%] w-24 md:w-96 h-96 bg-blueGradient-1 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob -z-0" />
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 place-items-center">
                  <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                    <div>
                      <div className="mt-6">
                        <h2
                          tabIndex={0}
                          className="text-3xl font-extrabold tracking-tight text-primary"
                        >
                          {service.title}
                        </h2>
                        <div className="text-lg mt-6 text-justify">
                          {service.content()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                    <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                      {/* <img
                                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                                                alt="Customer profile user interface"
                                            /> */}
                      <Image
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={service.img}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

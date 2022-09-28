import { NextPage } from "next";

import Image from "next/image";
import Banner from "../components/reusable/Banner";
import Heading from "../components/reusable/Heading";

import Recording from "../public/Services/1recording.jpg";
import PostProd from "../public/Services/2postprod.jpg";
import FilmProd from "../public/Services/3musicprod.jpg";

const Studio: NextPage = () => {
  return (
    <div className="bg-darkBlue text-white">
      <Banner title="About the Studio" />

      <div className="max-w-7xl mx-auto text-center">
        <div className="py-8 space-y-5 text-lg">
          <Heading title="Our Space" />
          <div>
            {
              "Bay Owl is more than just a recording studio facilty. It's a space that enables people to express themselves creatively and freely through their craft. In the words of some of the artists who frequent our facility, Bay Owl is home'. In it's truest essence, away from all the commercial work, Bay Owl really does feel like home, and not just to us that work there, but to a lot of our clients. With everything else in life that can be so stressful, we understand the importance of a space that artists can come to work at, but with such comfort that one doesn't realise where time has gone by."
            }
          </div>
          <div>
            {
              "Beyond our primary objective of trying to provide artists with a comfortable studio experience, Bay Owl is also an ultra-modern and contemporary recording and post production audio facility. With three multi-faceted studios and engineers with decades of experience between them, we're equipped to deal with any audio recording and post production needs that you may have. Our third studio is our most versatile space, which is primarily used for band rehearsals, but is also great for video and photo shoots, livestreams, pre-production meets, auditions, workshops, etc. Conveniently located next to Khar station, Bay Owl is your one stop shop for everything audio!"
            }
          </div>
          <div>
            {
              "Bay Owl was founded by Varun Parikh on 2nd February, 2020. Varun is a musician turned audio engineer who started his musical journey gigging with a couple of bands in Mumbai and Pune, around 2008. After a brief stint with chartered accountancy, he realised the potential of audio as a career while studying filmmaking in Mumbai. Deciding not to further specialise in filmmaking, Varun completed a diploma in sound engineering and through the course did brief project based internships with YRF Studios and NH7. Over the last decade, Varun has worked on albums and songs with a host of stellar artists such as Karsh Kale, Warren Mendonsa, Benny Dayal, Apeksha Dandekar, Ankur Tiwari, Divine, MC Altaf, KSHMR,etc., along with a plethora of independent musicians and bands. After working as a studio engineer at various studios in Mumbai and then freelancing for a couple of years, Varun eventually decided it was time to set up his own space."
            }
          </div>
          <div>{"And thus, Bay Owl Studios was born."}</div>
        </div>
        <div className="py-8 space-y-5 text-lg">
          <Heading title="Our Story" />
          <div>
            {
              "Setting up a commercial facility is no mean feat, it took a year of financial planning, nine months of finding the right space, two months assembling contractors and vendors, and seven months to build. Mistakes were made, lessons were learnt, but today we can proudly call Bay Owl Studios our own."
            }
          </div>
          <div>
            {
              "Interestingly enough, the orignal name for the studio was Night Owl Studios. Some official documents were also registered with this trade name. At the time of brainstorming a name for the studio, Varun and his wife Friyana had unanimously settled on 'Night Owl', as it was an apt reflection on studio life, often working through the wee hours. Only when speaking to a trademark attorney at a later stage did Varun realise that 'Night Owl' was already a protected wordmark. So to preserve the long term interests of the studio and without too much alteration to the name, Varun came up with 'Bay Owl', 'Bay' being a play on 'Bombay', the city which Varun has lived his entire life in, and one that holds a special place in his heart. Coincidentally, it turned out that a bay owl is actually a species of owl!"
            }
          </div>
        </div>
        <div className="py-8 space-y-5 text-lg">
          <Heading title="Our Mission" />
          <div>
            {
              "Today, our entire Bay Owl family is committed to serving musicians, artists, filmmakers, and anyone else that has a requirement for professional audio production services, to the best of our ability. Aside from our commercial projects, we strive to help independent artists, musicians and filmmakers as much as possible on their own passion projects. We know it ain't easy being an Indie!"
            }
          </div>
          <div>{"We've been there. We get you. We've got you!"}</div>
        </div>
      </div>
    </div>
  );
};

export default Studio;

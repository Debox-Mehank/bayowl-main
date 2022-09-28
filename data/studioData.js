import studioA from '../public/Studio/StudioA.jpg'
import studioB from '../public/Studio/StudioB.jpg'
import studioC from '../public/Studio/StudioC.jpg'
import chillSpace from '../public/Studio/ChillSpace.jpg'

const studios = [
    {
        title: 'Studio A',
        mobScrollValue: 0,
        description:
            "Centered around the gorgeous API Box II console, Bay Owl Studio A has plenty of space and a great vibe for multiple artists to jam up ideas and can even track full bands.",
        shortdesc: "Gorgeous API Box Recording console.",
        image: studioA,
        route: "/studios/studio-a",
        slug: "studio-a",
        hasGear: true,
        gear: [
            {
                type: "Microphones",
                subCat: [
                    {
                        title: "Condenser",
                        list: [
                            "Telefunken TF-47 (Vintage Vaccum Tube)",
                            "Telefunken TF-51 (Modern Vaccum Tube)",
                            "Neumann U87ai FET",
                            "Neumann 103 FET",
                            "AKG C414 XLII x2",
                            "Telefunken M-60 FET x2",
                        ]
                    },
                    {
                        title: "Dynamic",
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
                            "Sennheiser e906"
                        ]
                    }
                ]
            },
            {
                type: "Monitors",
                subCat: [
                    {
                        title: "Speakers",
                        list: [
                            "Adam S5H",
                            "Focal Shape 65",
                        ]
                    },
                    {
                        title: "Headphones",
                        list: [
                            "Shure SRH1840",
                            "Beyer Dynamics DT 770 Pro",
                            "Beyer Dynamics DT 990 Pro",
                            "Sennheiser HD200 Pro x 6",
                            "AKG K92",
                            "Behringer HPS 3000 x10"
                        ]
                    }
                ]
            },
            {
                type: "Outboard Gear",
                subCat: [
                    {
                        title: "Outboard Gear",
                        list: ["API The BOX 2 Console", "Manley Voxbox Tube Channelstrip", "ART Pro VLA II Stereo Compressor", "Audient ASP880 Preamp", "Avid HD IO", "Avid HD Native Thunderbolt"]
                    }
                ]
            },
            {
                type: "Licensed Software",
                subCat: [
                    {
                        title: "DAWs",
                        list: ["Pro Tools Ultimate", "Presonus Studio One", "Ableton Lite", "Logic Pro X"]
                    },
                    {
                        title: "Mixing & Mastering",
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
                            "Waves"
                        ]
                    }
                ],
            },
            {
                type: "Amps & Instruments",
                subCat: [
                    {
                        title: "Guitar",
                        list: ["Kramer Striker 911 Vintage Series Electric Guitar", "Granada Rosewood Acoustic"]
                    },
                    {
                        title: "Bass",
                        list: ["Hartke LH-500 Bass Head", "Laney R410 Bass Cab"]
                    },
                    {
                        title: "Keys",
                        list: ["Novation Impulse 61 Midi Keyboard", "Arturia Microlab MkII 25 Midi Controller"]
                    },
                ],
            }
        ],
        content() {
            return (
                <>
                    <ul className='list-disc pl-8 space-y-2'>
                        <li>
                            {"Centered around the gorgeous API Box Recording console, this studio is fully equipped to suffice all your band’s needs"}
                        </li>
                        <li>
                            {"For post production, there’s plenty of space for producers and sessions artists to jam up ideas, with the large ocean themed mix room providing a great vibe"}
                        </li>
                        <li>
                            {"The live room in this studio can host a full size drum kit. With gorgeous uninterrupted views of the nearby railway tracks, it’s easy to daydream new ideas inbetween takes!"}
                        </li>
                    </ul>
                </>
            )
        }
    },
    {
        title: 'Studio B',
        mobScrollValue: 120,
        description:
            "The cosier studio, Bay Owl's Studio B still houses the API Box II Console and can comfortably track upto two artists together.",
        shortdesc: "The cozier of the two mix rooms",
        image: studioB,
        route: "/studios/studio-b",
        slug: "studio-b",
        hasGear: true,
        gear: [
            {
                type: "Microphones",
                subCat: [
                    {
                        title: "Condenser",
                        list: [
                            "Telefunken TF-47 (Vintage Vaccum Tube)",
                            "Telefunken TF-51 (Modern Vaccum Tube)",
                            "Neumann U87ai FET",
                            "Neumann 103 FET",
                            "AKG C414 XLII x2",
                            "Telefunken M-60 FET x2",
                        ]
                    },
                    {
                        title: "Dynamic",
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
                            "Sennheiser e906"
                        ]
                    }
                ]
            },
            {
                type: "Monitors",
                subCat: [
                    {
                        title: "Speakers",
                        list: [
                            "Adam S2V65",
                            "Focal Trio11be",
                        ]
                    },
                    {
                        title: "Headphones",
                        list: [
                            "Shure SRH1840",
                            "Beyer Dynamics DT 770 Pro",
                            "Beyer Dynamics DT 990 Pro",
                            "Sennheiser HD200 Pro x 6",
                            "AKG K92",
                            "Behringer HPS 3000 x10"
                        ]
                    }
                ]
            },
            {
                type: "Licensed Software",
                subCat: [
                    {
                        title: "DAWs",
                        list: ["Pro Tools Ultimate", "Presonus Studio One", "Ableton Lite", "Logic Pro X"]
                    },
                    {
                        title: "Mixing & Mastering",
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
                            "Waves"
                        ]
                    }
                ],
            },
            {
                type: "Outboard Gear",
                subCat: [
                    {
                        subCat: "Outboard Gear",
                        list: ["API The BOX II Console", "UAD LA-610 MkII Tube Channelstrip", "Avid HD IO", "Avid HD Native Thunderbolt"]
                    }
                ]
            },
            {
                type: "Amps & Instruments",
                subCat: [
                    {
                        title: "Guitar",
                        list: ["Kramer Striker 911 Vintage Series Electric Guitar", "Granada Rosewood Acoustic"]
                    },
                    {
                        title: "Bass",
                        list: ["Hartke LH-500 Bass Head", "Laney R410 Bass Cab"]
                    },
                    {
                        title: "Keys",
                        list: ["Novation Impulse 61 Midi Keyboard", "Arturia Microlab MkII 25 Midi Controller"]
                    },
                ],
            }
        ],
        content() {
            return (
                <>
                    <ul className='list-disc pl-8 space-y-2'>
                        <li>
                            {"The cozier of the two mix rooms, our Studio B is the first choice for producers that prefer that homely and intimate feel. The forest theme, with custom printed acoustic wall panels adds that positive relaxing element to the room."}
                        </li>
                        <li>
                            {"From an operations point of view, Studio B has the same workload capability as that of the larger room"}
                        </li>
                        <li>
                            {"The live room of Studio B is more aligned for in the box producers. It can comfortably record upto a duet of live instruments or upto four vocalists together. This live room too has unobstructed views of passing trains, which really adds to the positive vibes in the room!"}
                        </li>
                    </ul>
                </>
            )
        }
    },
    {
        title: 'Studio C - The Live Room',
        mobScrollValue: 250,
        description:
            "Bay Owl's Studio C is perfect for your next rehearsal, whether just a trio or a large bollywood band. Alternatively this room is great for livestreams, shoots, workshops and intimate sets. ",
        shortdesc: "Rehearsals, livestreams, video shoots...",
        image: studioC,
        route: "/studios/studio-c",
        slug: "studio-c",
        hasGear: true,
        gear: [
            {
                type: "Microphones",
                subCat: [
                    {
                        title: "Condenser",
                        list: [
                            "Telefunken TF-47 (Vintage Vaccum Tube)",
                            "Telefunken TF-51 (Modern Vaccum Tube)",
                            "Neumann U87ai FET",
                            "Neumann 103 FET",
                            "AKG C414 XLII x2",
                            "Telefunken M-60 FET x2",
                        ]
                    },
                    {
                        title: "Dynamic",
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
                            "Sennheiser e906"
                        ]
                    }
                ]
            },
            {
                type: "Monitors",
                subCat: [
                    {
                        title: "Speakers",
                        list: [
                            "JBL EON 15",
                        ]
                    },
                    {
                        title: "Headphones",
                        list: [
                            "Sennheiser HD200 Pro x 6",
                            "AKG K92",
                            "Behringer HPS 3000 x10"
                        ]
                    }
                ]
            },
            {
                type: "Outboard Gear",
                subCat: [
                    {
                        title: "Outboard Gear",
                        list: ["Presonus AR16C Mixer"]
                    }
                ]
            },
            {
                type: "Amps & Instruments",
                subCat: [
                    {
                        title: "Guitar",
                        list: ["Marshall Code 100H Amp Head", "Marshall 4x12 Guitar Cab", "Fender Mustang GT200 2x12 Combo", "Kramer Striker 911 Vintage Series Electric Guitar", "Granada Rosewood Acoustic"]
                    },
                    {
                        title: "Drums",
                        list: [
                            "Shells - Mapex Mars 5 piece",
                            `Hi Hat - Zildjian 14"`,
                            `Crash Ride - Meinl 18"`,
                            `Ride - Sabian SBR 20"`,
                            `Throne - Pearl D930`
                        ]
                    },
                    {
                        title: "Bass",
                        list: ["Hartke LH-500 Bass Head", "Laney R410 Bass Cab", "Hartke HD50 Bass Combo"]
                    },
                    {
                        title: "Keys",
                        list: ["Novation Impulse 61 Midi Keyboard", "Arturia Microlab MkII 25 Midi Controller"]
                    },
                ],
            }
        ],
        content() {
            return (
                <>
                    <ul className='list-disc pl-8 space-y-2'>
                        <li>
                            {"Rehearsals, livestreams, video shoots, workshops, or whatever else your requirement, our live room has you covered! More spacious than most rehearsal rooms you’ll see, with some great gear available!"}
                        </li>
                        <li>
                            {"Practice with your bandmates, record your whole band live, or live stream a session. This multipurpose room has everything your band will need for any session"}
                        </li>
                        <li>
                            {"For client presentations or small workshops, look no further, this room comes with fixed seating for atleast 30 people!"}
                        </li>
                        <li>
                            {"This room can also be used by content creators for Podcasts, Twitch, YouTube, etc."}
                        </li>
                        <li>
                            {"As an artist you could even host an intimate set for your close friends and family, or have a pre-lauch listening session!"}
                        </li>
                    </ul>
                </>
            )
        }
    },
    {
        title: 'Chill Space',
        mobScrollValue: 350,
        description:
            'Plenty of books, board games, great coffee, a playstation 4 and a tt table to keep you entertained between sessions!',
        shortdesc: "Keep occupied between Sessions.",
        image: chillSpace,
        route: "/studios/chill-space",
        slug: "chill-space",
        hasGear: false,
        gear: [],
        content() {
            return (
                <>
                    <h5>Take a break between takes!</h5>
                    <ul className='list-disc pl-8 space-y-2'>
                        <li>
                            <span className='font-bold'>Board Games</span> {" - Whether you have a few minutes or a few hours to kill, take your pick from a rang of board games at your disposal!"}
                        </li>
                        <li>
                            <span className='font-bold'>TV</span> {" - Watch live matches or stream your favourite show on the 43″ TV"}
                        </li>
                        <li>
                            <span className='font-bold'>Playstation 4 Console</span> {" - Log on to our PS4 with 4 controllers and tons of games such as COD MW2, FIFA21, Apex Legends, Mortal Kombat and many many more!"}
                        </li>
                        <li>
                            <span className='font-bold'>Books</span> {" - If games aren’t your thing don’t worry, we’ve got a ton of books you can enjoy with a gorgeous view of the surrounding area to go with too!"}
                        </li>
                        <li>
                            <span className='font-bold'>Table Tennis</span> {" - Ask for the TT table to be setup if you’d like more of a workout, but just make sure to check that Studio C doesn’t have a session on first!"}
                        </li>
                        <li>{"Coffee & Snacks"}</li>
                    </ul>
                </>
            )
        }
    },
]
export default studios 
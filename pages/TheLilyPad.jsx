import React from "react"
import Image from "next/image"
import TLPImage from "../public/TLP Site Map.JPG"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const TheLilyPad = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={TLPImage} />
                <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h2 className="py-2 text-white font-bold">The Lily Pad</h2>
                    <h3 className="text-white uppercase text-xs">
                        Solidity / Hardhat / JavaScript / NextJS / TailwindCSS
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className=" col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        The vast majority of my coding journey has been self-taught, self-motivated,
                        self-funded. I encountered a number of hurdles and challenges that made this
                        path more difficult to walk than it needed to be and I see opportunity for
                        the creation of a better structured springboard for those entering the
                        development space.
                        <br />
                        <br />
                        I found, specifically, that while there existed a dizzying amount of
                        resources available from which to learn, roadblocks are hit. In the early
                        days of taking those first wobbly steps into coding, it's easy to become
                        completely paralyzed by simple problems - and it's difficult to find anyone
                        invested enough in your problem to help.
                        <br />
                        <br />
                        This isn't to say there aren't supportive avenues available, but there exist
                        hundreds of Discords, with thousands of members all focused on their own
                        project. There's only so much one can expect in terms of eyes on your
                        particular problem.
                        <br />
                        <br />I wanted to create a community focused on mutual progress through
                        shared journeys. A place to find people working through the same problems
                        you are, a place where it is mutually beneficial for people to be engaged
                        with their peers and share their struggles and successes.
                    </p>
                    <button className="cursor-not-allowed px-8 py-2 mt-4 mr-8 hover:scale-105">
                        Demo
                    </button>
                    <button className="cursor-not-allowed px-8 py-2 mt-4 hover:scale-105">
                        Code
                    </button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl h-fit bg-teal-400 shadow-gray-500 rounded-xl p-2">
                    <div className="rounded-xl bg-white">
                        <div className="p-2">
                            <p className="text-center font-bold">Technologies</p>
                            <div className="grid grid-cols-3 md:grid-cols-1">
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    Solidiy
                                </p>
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    Hardhat
                                </p>
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    JavaScript
                                </p>
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    NodeJS
                                </p>
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    React/NextJS
                                </p>
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    TailwindCSS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline hover:cursor-pointer ml-5">Back</p>
                </Link>
            </div>
        </div>
    )
}

export default TheLilyPad

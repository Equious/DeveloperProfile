import React from "react"
import Image from "next/image"
import TLPImage from "../public/TLP Site Map.JPG"
import popUp from "../public/2020Christmas.png"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const TheLilyPad = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={popUp} />
                <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h2 className="py-2 text-white font-bold">2020 Christmas</h2>
                    <h3 className="text-white uppercase text-xs">C# / Unity</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className=" col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        I had spent months losing my mind in solitude during the pandemic for months
                        in 2020. I quickly dove into coding/programming/gaming the things I loved to
                        fill my spare time with. This project is a result of those things married
                        and very limited skill as I was just getting back into things...
                        <br />
                        <br />
                        This is a digital pop-up book, cataloguing some of the most noteworthy
                        events of 2020, some may best left forgotten, but for better or worse -
                        here's a reminder of what we all went through.
                    </p>
                    <Link href="https://equious.itch.io/a-2020-christmas">
                        <button className="px-8 py-2 mt-4 mr-8 hover:scale-105">Demo</button>
                    </Link>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl h-fit bg-teal-400 shadow-gray-500 rounded-xl p-2">
                    <div className="rounded-xl bg-white">
                        <div className="p-2">
                            <p className="text-center font-bold">Technologies</p>
                            <div className="grid grid-cols-3 md:grid-cols-1">
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    C#
                                </p>
                                <p className="text-gray-600 py-2 flex items-center">
                                    <RiRadioButtonFill size={10} className="mr-2" />
                                    Unity
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

import React from "react"
import Image from "next/image"
import imageGallery from "../public/MJIG.png"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const TheLilyPad = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={imageGallery}
                />
                <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h2 className="py-2 text-white font-bold">Limitless</h2>
                    <h3 className="text-white uppercase text-xs">
                        Solidity / JavaScript / NextJS / TailwindCSS
                    </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className=" col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <div className="flex justify-center w-full h-full place-items-center">
                        <h1 className="tracking-widest">COMING SOON!</h1>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl h-fit bg-teal-400 shadow-gray-500 rounded-xl p-2">
                    <div className="rounded-xl bg-white">
                        <div className="p-2">
                            <p className="text-center font-bold">Technologies</p>
                            <div className="grid grid-cols-3 md:grid-cols-1"></div>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="mt-16 underline hover:cursor-pointer ml-5">Back</p>
                </Link>
            </div>
        </div>
    )
}

export default TheLilyPad

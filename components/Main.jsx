import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Link from "next/link"

const Main = () => {
    return (
        <div id="home" className="flex justify-center py-60">
            <div className="w-[75%] h-[350px] text-center bg-white rounded-2xl shadow-xl shadow-gray-500">
                <div className="max-w-[1240px] mx-auto p-2 flex justify-center items-center">
                    <div>
                        <h1 className="sm:py-5 text-gray-700 text-3xl md:text-[32pt]">
                            Hi, I'm <span className="text-red-800">Equious</span>
                        </h1>
                        <h2 className="md:py-1 text-gray-700 text-2xl md:text-[26pt]">
                            A <span className="text-red-800">full-stack</span>,{" "}
                            <span className="text-red-800">Web3</span> developer.
                        </h2>
                        <p className="py-1 sm:py-3 text-gray-600 max-w-[70%] m-auto text-xs sm:text-base">
                            I'm a full-stack Web3 developer with a focus on Blockend and Smart
                            Contract development. Presently I'm working towards the launch of{" "}
                            <span className="text-red-800 font-bold">The Lily Pad</span>, a
                            community to assist self-learners in technology and Web3, as a founding
                            Dev Team Member.
                        </p>
                        <div className="flex items-center justify-evenly sm:justify-between max-w-[330px] m-auto py-6 sm:py-1 md:py-6">
                            <div className="bg-teal-400 rounded-full shadow-lg shadow-gray-400 p-2 sm:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                <Link href="https://www.linkedin.com/in/travis-m-74383a124/">
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                            <div className="bg-teal-400 rounded-full shadow-lg shadow-gray-400 p-2 sm:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                <Link href="https://github.com/Equious">
                                    <FaGithub />
                                </Link>
                            </div>
                            <div className="bg-teal-400 rounded-full shadow-lg shadow-gray-400 p-2 sm:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                            <div className="bg-teal-400 rounded-full shadow-lg shadow-gray-400 p-2 sm:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

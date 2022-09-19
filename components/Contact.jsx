import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import Link from "next/link"

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 pt-16 w-full">
                <p className="uppercase text-xl tracking-widest text-gray-600">Contact</p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-2">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-4 bg-teal-400">
                        <div className="lg:p-4 h-full grid gap-2">
                            <div className="flex justify-center sm:hoverscale-[103] hover:scale-105 ease-in duration-300">
                                <img className="rounded-xl" src="/contactImg.png" alt="/" />
                            </div>
                            <div className="bg-white rounded-xl p-2">
                                <h2 className="py-2">Travis Montgomery</h2>
                                <p className="font-bold text-sm">Full-Stack/Blockchain Developer</p>
                                <p className="py-4">
                                    I am available for freelance positions. Contact me and let's
                                    talk.
                                </p>
                                <div>
                                    <p className="uppercase pt-8">Connect With Me</p>
                                    <div className="flex items-center justify-between sm:justify-between max-w-[330px] m-auto py-6 sm:py-1 md:py-6">
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

                    {/* right */}

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-400"
                                        type="email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-400"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-400"
                                        rows="10"
                                    ></textarea>
                                </div>
                                <button className="w-full p-4 text-black mt-4 hover:scale-105">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="bg-teal-400 rounded-full shadow-lg shadow-gray-400 p-2 sm:p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact

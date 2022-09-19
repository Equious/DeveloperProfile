import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed w-full h-20 shadow-lg shadow-gray-500 z-[100]">
            <div className=" bg-teal-400 flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image
                        className="hover:cursor-pointer hover:scale-105"
                        src="/LillyPad-logo-color.png"
                        width="75"
                        height="65"
                    />
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-black">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-black">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-black">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-black">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-black">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} className="hover:cursor-pointer" />
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-teal-400 p-10 ease-in duration-500"
                            : "fixed left-[-175%] top-0 p-10 ease-in duration-500"
                    }
                >
                    {/*Mobile Menu*/}
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                <Image
                                    className="hover:cursor-pointer hover:scale-105"
                                    src="/LillyPad-logo-color.png"
                                    width="55"
                                    height="45"
                                    alt="/"
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className="bg-white rounded-full shadow-lg shadow-gray-700 p-[10px] cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="text-[10px] font-bold border-b my-6">
                            <p>
                                On a mission to encourage developers to look back and assist those
                                on the path behind them.
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest border-b border-black text-white">
                                Let's Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="bg-white rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href="https://www.linkedin.com/in/travis-m-74383a124/">
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                                <div className="bg-white rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href="https://github.com/Equious">
                                        <FaGithub />
                                    </Link>
                                </div>
                                <div className="bg-white rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                <div className="bg-white rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

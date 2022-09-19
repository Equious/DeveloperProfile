import React from "react"
import Link from "next/link"
import Image from "next/image"

const ProjectItem = ({ title, backgroundImage, projectURL }) => {
    return (
        <div className="relative flex items-center bg-teal-400 justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-2 group hover:bg-gradient-to-r from-teal-600 to-teal-400">
            <div>
                <Image
                    src={backgroundImage}
                    alt="/"
                    className="rounded-xl group-hover:opacity-25"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="text-center text-lg font-extrabold">{title}</h3>
                    <p className="text-xm font-semibold p-2">
                        Structure and support in self-learning.
                    </p>
                    <Link href={projectURL}>
                        <p className="underline bg-white rounded-lg p-2 text-center font-bold mx-auto h-fit w-fit cursor-pointer">
                            More Info
                        </p>
                    </Link>
                </div>
                <div className="text-xs uppercase tracking-wider font-bold">
                    Role: Project Manager/Founder
                </div>
            </div>
        </div>
    )
}

export default ProjectItem

import React from "react"
import TLPImage from "../public/TLP Site Map.JPG"
import imageGallery from "../public/MJIG.png"
import popUp from "../public/2020Christmas.png"
import ProjectItem from "./ProjectItem"

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="uppercase text-xl tracking-widest text-gray-600">Projects</p>
                <h2 className="py-4">What I've Built:</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="The Lily Pad"
                        backgroundImage={TLPImage}
                        projectURL="/TheLilyPad"
                    />
                    <ProjectItem
                        title="Limitless"
                        backgroundImage={imageGallery}
                        projectURL="/Limitless"
                    />
                    <ProjectItem
                        title="A 2020 Christmas"
                        backgroundImage={popUp}
                        projectURL="/2020Christmas"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects

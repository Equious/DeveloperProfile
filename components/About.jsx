import React from "react"

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-gray-600">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600 italic">
                        -- even a path well walked can be uniquely experienced.
                    </p>
                    <p className="py-2 text-gray-800">
                        My first real exposure to coding/programming came in 2005 with University.
                        It was not for me. I'm unsure if it was my youthful lack of commitment, or
                        ambitions beyond my skills, but programming was quickly backburnered in my
                        life, despite a smouldering interest.
                    </p>
                    <p className="py-2 text-gray-800">
                        Fast forward to 2020, height of the pandemic, working from home, bored to
                        tears. It was at this point I installed VSCode et al and my journey truly
                        began. I enrolled into a Python course online. Meant for 7 weeks, I
                        completed it in 3 days and went on to C# and Unity, dabbling in making my
                        own games and applications.
                    </p>
                    <p className="py-2 text-gray-800">
                        In 2021 I entered the world of Web3 and blockchain development. I'd been a
                        proponent of cryptocurrencies in the past, but never had been afforded
                        exposure to the programming side of things. Smart Contracts and Blockend
                        development was/is a whole new world that I am eagerly exploring and
                        endeavoring to bring as many people as I can along for the ride.
                    </p>
                    <p className="py-2">
                        Take a{" "}
                        <span className="text-red-800 font-bold underline cursor-pointer">
                            look
                        </span>{" "}
                        at what I'm building!
                    </p>
                </div>
                <div className="place-self-center w-full h-fit bg-teal-400 p-2 rounded-xl shadow-xl shadow-gray-500 hover:scale-110 ease-in duration-300 flex items-center justify-center">
                    <img className="rounded-xl" src="/dishevelled_man.png" />
                </div>
            </div>
        </div>
    )
}

export default About

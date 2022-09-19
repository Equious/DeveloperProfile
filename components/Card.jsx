import React from "react"

const Card = () => {
    return (
        <div className="flex justify-center py-60">
            <div className="w-[75%] h-fit text-center bg-teal-600 rounded-xl shadow-xl shadow-gray-500 flex items-center">
                <div className="max-w-[1240px] mx-auto p-2 flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-4 relative group">
                        <div className="grid col-span-3">
                            <img src="/testImages/6.png" alt="/" className="rounded-xl" />
                        </div>
                        <div className="text-center items-center rounded-xl hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-97%] translate-y-[-75%] bg-white bg-opacity-80">
                            <p className="uppercase font-bold tracking-widest">
                                TLP is celebrating our launch! Join us and mint your Soulbound Pond
                                Token 25% off, and start tracking your coding journey today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

'use client'

import { Icon } from '@iconify/react';

const header = () => {
  return (
    <div className="px-12 lg:max-w-screen-md xl:max-w-screen-lg mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 xl:gap-32 items-center">
            <div className="order-last md:order-first"> 
                <div className="space-y-2">
                    <h1 className="text-sm md:text-base">Hello! I’m</h1>
                    <h2 className="text-xl md:text-2xl">Rafa Azka Ulinnuha</h2>
                    <h3 className="text-xs md:text-sm font">An undergraduate computer science student with a strong interest in web development and data analysis. </h3>
                </div>   
                <div className="mt-16">
                    <div className="flex flex-wrap space-x-1 md:space-x-4">             
                        <a href="https://www.linkedin.com/in/rafa-azka-ulinnuha/">
                            <div className="flex flex-wrap space-x-2 bg-[#0076B2] rounded-lg p-2">
                                <Icon icon="bi:linkedin" className="text-2xl text-white" />
                                <span className="text-white font-semibold tracking-wide">LinkedIn</span>
                            </div>
                        </a>
                        <a href="https://github.com/RafaUlinnuha">
                            <div className="flex flex-wrap space-x-2 bg-[#0A0A0A] rounded-lg p-2">
                                <Icon icon="bi:github" className="text-2xl text-white" />
                                <span className="text-white font-semibold tracking-wide">Github</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <img src="./foto.png" />
            </div>
        </div>
    </div>
  )
}

export default header
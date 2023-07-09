'use client'

import { Icon } from '@iconify/react';

const cardGreen = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-wrap h-72 lg:h-80 py-6 lg:p-8 xl:mx-6 px-6 md:px-8 bg-[#6BCB77] rounded-lg transition ease-in-out delay-150 hover:scale-105 duration-300 shadow-md order-last">
            <h1 className="text-2xl lg:text-3xl text-white font-bold">{props.name}</h1>
            <p className="font-light text-white text-sm lg:text-base">{props.desc}</p>
            <a href="" className="text-center w-3/4 md:w-2/3 py-2 bg-slate-50 text-[#6BCB77] rounded-full mt-auto mx-auto">
                <div className="flex flex-wraps space-x-2 justify-center items-center">
                <span>See Detail</span>
                <Icon icon="material-symbols:arrow-forward-rounded" className="text-xl" />
                </div>
            </a>
        </div>
        <div>
            <img src={props.img} />
        </div>
  </div>
  )
}

export default cardGreen
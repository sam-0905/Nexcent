
import {heroData} from "@/data/hero";
import Image from "next/image";


const Hero = () => {
  return (
    <>
    <div className="flex items-center justify-between gap-10">
       <div className="flex-1">
            <h1 className="text-5xl font-bold">
              {heroData.title}
              <span className="text-green-500">
                 from 8 years
                </span>
             </h1>

            <p className="p-5 text-lg text-gray-600">
              {heroData.subtitle}
             </p>

         <button className="rounded bg-green-500 px-4 py-2 text-white">
             {heroData.cta.label}
             </button>
         </div>
        
        </div>
    </>
  )
}

export default Hero
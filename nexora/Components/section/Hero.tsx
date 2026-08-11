
import {heroData} from "@/data/hero";
import Image from "next/image";


const Hero = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between bg-[#F5F7FA]">
       <div className="flex-1 px-8 m-7 justify-center">
            <h1 className="text-5xl font-bold px-2 ">
              {heroData.title}
              <span className="text-green-500">
                 from 8 years
                </span>
             </h1>

            <p className="p-4 text-lg text-gray-400">
              {heroData.subtitle}
             </p>

         <button className="rounded bg-green-500 px-4 py-2 text-white">
             {heroData.cta.label}
             </button>
         </div>

           <div className="flex-1">
         <Image
            src={heroData.image.src}
            alt={heroData.image.alt}
            width={300}
            height={300}
            className="object-contain"
              />
            </div>
        
        </div>
    </>
  )
}

export default Hero

import {heroData} from "@/app/data/hero";
import Image from "next/image";


const Hero = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-15 md:flex-row md:justify-between mt-10 mb-10 bg-[#F5F7FA]">
       <div className="flex-1 px-8 m-7 justify-center space-y-4">
            <h1 className="text-5xl font-bold px-2 text-[#4D4D4D]">
              {heroData.title}
              <span className="text-[#4caf4f] px-3">
                 from 8 years
                </span>
             </h1>

            <p className=" p-2 text-sm text-gray-400">
              {heroData.subtitle}
             </p>

         <button className="rounded bg-[#4caf4f] px-10 py-4 ml-1.5 text-white ">
             {heroData.cta.label}
             </button>
         </div>

           <div className="flex-1 p-3 m-5">
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
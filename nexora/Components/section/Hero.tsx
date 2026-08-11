
import {heroData} from "@/data/hero";
import Image from "next/image";


const Hero = () => {
  return (
    <>
   <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
     <h1 className="text-4xl font-bold px-0.5">{heroData.title}
        <span className="text-green-500 px-0.5">from 8 years</span>
    </h1>
    <p className="text-lg text-gray-600 p-5">{heroData.subtitle}</p>
    <button className="bg-green-500 text-white px-4 py-2 rounded">{heroData.cta.label}</button>
    <div>
        <Image src={heroData.image.src} alt={heroData.image.alt} width={300} height={300} className="object-contain vertical-align-middle"/>
    </div>

   </div>
    </>
  )
}

export default Hero
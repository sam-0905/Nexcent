
import {servicesData} from "@/data/service";
import Image from "next/image";

const Services = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-10">
         <div className= "text-center">
            <h2 className="text-3xl font-bold">{servicesData.title}</h2>
            <p>{servicesData.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                  {servicesData.logo.map((logo, index) => (
                <Image key={index} src={logo.src} alt={logo.alt} width={100} height={100} />
                  ))}
            </div>
         </div>
        
        

    </div>
    </>
  )
}

export default Services
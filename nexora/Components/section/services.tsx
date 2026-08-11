
import {servicesData} from "@/data/service";
import Image from "next/image";

const Services = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-10">
         <div className= "text-center">
            <h2 className="text-4xl font-bold text-[#4D4D4D] mb-10">{servicesData.title}</h2>
            <p className="text-md text-[#666] mb-8">{servicesData.subtitle}</p>
            <div className=" space-x-5 mt-10 flex flex-wrap items-center justify-center gap-20 py-5">
                  {servicesData.logo.map((logo, index) => (
                <Image key={index} src={logo.src} alt={logo.alt} width={50} height={50} />
                  ))}
            </div>
         </div>
        
        <div>
            <h2>{servicesData.title2}</h2>
            <p>{servicesData.subtitle2}</p>
            <div>
                {servicesData.services.map((service, index) => (
                    <div key={index}>
                        <Image src={service.icon} alt={service.title} width={50} height={50} />
                    </div>
                ))}
            </div>
        </div>   

    </div>
    </>
  )
}

export default Services
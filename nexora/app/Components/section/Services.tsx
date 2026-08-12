
import {servicesData} from "@/app/data/service";
import Image from "next/image";
import Link from "next/link";

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
        
        <div className="text-center mt-10">
            <h2 className="mx-auto mb-5 max-w-md text-center text-3xl font-bold text-[#4D4D4D]">{servicesData.title2}</h2>
            <p className="text-md text-[#666] mb-8">{servicesData.subtitle2}</p>
            <div className="grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3 lg:px-20">
                {servicesData.services.map((service, index) => (
                    <div key={index} 
                    className="flex flex-col items-center space-y-4 p-6 rounded-lg shadow-md m-4 ">
                        <Image src={service.icon} alt={service.title} width={50} height={50} />
                        <h3 className="text-2xl font-bold text-[#4D4D4D] mb-7">{service.title}</h3>
                        <p className="text-[#666]">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>   
        
        <div className="flex flex-col items-center justify-around mt-10 gap-3 ml-auto md:flex-row">
           <div className="flex-1">   
                <Image src={servicesData.client.logo.src} alt={servicesData.client.logo.alt} width={400} height={400} className="mx-auto object-contain"></Image>
            </div>
            <div className="flex-1 space-y-10 m-1 py-2">
                 <h2 className="text-3xl font-bold text-[#4D4D4D] mb-7">{servicesData.client.title}</h2>
                 <p className="text-md text-[#666] mb-8 mr-5">{servicesData.client.para}</p>
                 <Link href={servicesData.client.cta.href} className="bg-[#4caf4f] text-white px-5 py-3 rounded">
                     {servicesData.client.cta.label}
                    </Link>
            </div>
           </div>

    </div>
    </>
  )
}

export default Services
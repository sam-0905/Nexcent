
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
        
        <div className="text-center mt-10">
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-7">{servicesData.title2}</h2>
            <p className="text-md text-[#666] mb-8">{servicesData.subtitle2}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {servicesData.services.map((service, index) => (
                    <div key={index} 
                    className="flex flex-col items-center p-6 bg-[#F5F7FA] rounded-lg shadow-md m-4 p-4">
                        <Image src={service.icon} alt={service.title} width={50} height={50} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>   
        
        <div className="text-center mt-10">
            <Image src={servicesData.client.logo.src} alt={servicesData.client.logo.alt} width={400} height={400}></Image>
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-7">{servicesData.client.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dignissimos nulla rem repellendus expedita officia harum nostrum nam iusto reprehenderit accusamus, neque unde nesciunt numquam sint? Harum perferendis fugiat dolorum.</p>
            <button>{servicesData.client.cta.href}</button>
        </div>

    </div>
    </>
  )
}

export default Services
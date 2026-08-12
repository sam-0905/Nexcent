import Image from "next/image"
import {supportData} from "@/data/support" 

const Support = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-3 bg-[#f5f7fa] px-6 py-10 md:flex-row md:justify-between lg:px-20">


        <div className="flex-1 px-2 m-2 ">
        <h2 className="text-4xl font-bold text-[#4D4D4D] mb-7 mt-5">{supportData.status.title}
          <span className="block text-[#4caf4f]">business reinvent itself</span>
        </h2>
        <p className="text-md text-[#666] mb-8">{supportData.status.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8 mr-10">
        {supportData.status.achievements.map((achievement) => (
            <div key={achievement.title} className="flex items-center gap-4">
            <Image 
                src={achievement.logo.src} 
                alt={achievement.logo.alt}  
                width={50}
                height={50}
                />
                <div>
                  <h3 className=" text-xl font-bold text-[#4D4D4D]" >{achievement.title}</h3>
                <p className="text-sm text-[#666]">{achievement.subtitle}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Support
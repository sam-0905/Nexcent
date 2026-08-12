import Image from "next/image"
import {supportData} from "@/data/support" 

const Support = () => {
  return (
    <>
    <div className="flex flex-col items-center md:flex-row gap-10 mt-10 mb-8 justify-between">
        <div className="flex-1 px-6 m-7 ">
        <h2 className="text-4xl font-bold text-[#4D4D4D] mb-7">{supportData.status.title}
          <span className="block text-[#4caf4f]">business reinvent itself</span>
        </h2>
        <p className="text-md text-[#666] mb-8">{supportData.status.subtitle}</p>
        </div>
        <div className="flex">
        {supportData.status.achievements.map((achievement) => (
            <div key={achievement.title}>
            <Image 
                src={achievement.logo.src} 
                alt={achievement.logo.alt}  
                width={50}
                height={50}
                />
                <h3>{achievement.title}</h3>
                <p>{achievement.subtitle}</p>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Support
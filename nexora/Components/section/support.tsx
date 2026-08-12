import Image from "next/image"
import {supportData} from "@/data/support" 

const Support = () => {
  return (
    <>
    <div>
        <div>
        <h2>{supportData.status.title}</h2>
        <p>{supportData.status.subtitle}</p>
        </div>
        <div>
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
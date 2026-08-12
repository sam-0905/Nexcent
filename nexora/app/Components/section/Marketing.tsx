import {marketing} from "@/app/data/marketing"
import Image from "next/image"
import Link from "next/link"

const Marketing = () => {
    return (
           <> 
            <div className="flex flex-col">
                <div className="text-center mt-10">
                    <h2 className="mx-auto mb-5 max-w-md text-center text-3xl font-bold text-[#4D4D4D]">{marketing.title}</h2>
                    <p className="text-md text-[#666] mb-8">{marketing.subtitle}</p>
                    <div className="flex items-center">
                        {marketing.cards.map((card)=>(
                            <div key={card.title}>
                                <Image 
                                src={card.logo.src}
                                alt={card.logo.alt}
                                width={400}
                                height={400}
                                />
                               <div>
                                 <h2 className="text-2xl font-bold text-[#4D4D4D] mb-7">{card.title}</h2>
                                <Link className="bg-[#4caf4f] text-white px-5 py-3 rounded" href={card.cta.href}>{card.cta.label}</Link>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

           </>
        )
}


export default Marketing
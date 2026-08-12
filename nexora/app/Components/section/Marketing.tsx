import {marketing} from "@/app/data/marketing"
import Image from "next/image"
import Link from "next/link"

const Marketing = () => {
    return (
           <> 
            <div className="flex flex-col">
                <div className="text-center mt-10">
                    <div>
                        <h2 className="mx-auto mb-5 max-w-md text-center text-3xl font-bold text-[#4D4D4D]">{marketing.title}</h2>
                    <p className="mx-auto mb-8 w-[50%] text-md text-[#666] text-center">{marketing.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-20">
                        {marketing.cards.map((card)=>(
                            <div key={card.title} className="relative h-[350px] w-full overflow-hidden rounded-lg">
                                <Image 
                                src={card.logo.src}
                                alt={card.logo.alt}
                                width={400}
                                height={400}
                                className="object-cover"
                                />
                               <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-lg bg-white p-6 text-center shadow-lg">
                                 <h2 className="mb-5 text-xl font-bold text-[#4D4D4D]">{card.title}</h2>
                                <Link className="inline-block rounded bg-[#4caf4f] px-5 py-3 text-white transition hover:bg-[#3d9c40]" href={card.cta.href}>{card.cta.label}</Link>
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
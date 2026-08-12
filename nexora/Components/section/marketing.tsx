import {marketing} from "@/data/marketing"
import Image from "next/image"
import Link from "next/link"

const Marketing = () => {
    return (
           <> 
            <div>
                <div>
                    <h2>{marketing.title}</h2>
                    <p>{marketing.subtitle}</p>
                    <div>
                        {marketing.cards.map((card)=>(
                            <div key={card.title}>
                                <Image 
                                src={card.logo.src}
                                alt={card.logo.alt}
                                width={200}
                                height={200}
                                />
                                <h2>{card.title}</h2>
                                <Link href={card.cta.href}>{card.cta.label}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

           </>
        )
}


export default Marketing
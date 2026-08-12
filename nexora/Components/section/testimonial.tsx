import {testimonial} from "@/data/testimonial"
import Image from "next/image"
import Link from "next/link"

const Testimonials = () => {
    return (  <>
    <div className="flex flex-col items-center justify-between mt-10 gap-3 ml-auto md:flex-row">
        <div className="flex-1 mt-3 mb-3">
            <Image
            src={testimonial.logo.src}
            alt={testimonial.logo.alt}
            width={400}
            height={400}
            />
        </div>
        <div className="flex-1 space-y-10 m-1 py-2 mb-5 mr-4">
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-7">{testimonial.title}</h2>
            <p className="text-md text-[#666] mb-8">{testimonial.para}</p>
            <Link className="bg-[#4caf4f] text-white px-5 py-3 rounded" href={testimonial.cta.href}>{testimonial.cta.label}</Link>
        </div>
    </div>

            
    <div>
        <div>
            <Image
            src={testimonial.company.logo.src}
            alt={testimonial.company.logo.alt}
            width={400}
            height={400}
            />
        </div>
        <div>
            <p>{testimonial.company.para}</p>
            <h2>{testimonial.company.title}</h2>
            <p>{testimonial.company.para2}</p>
            <Link href={testimonial.company.cta.href}>{testimonial.company.cta.label} →</Link>
        </div>
    </div>
    

    </>)
  
}

export default Testimonials
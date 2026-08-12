import {testimonial} from "@/data/testimonial"
import Image from "next/image"
import Link from "next/link"

const Testimonials = () => {
    return (  <>
    <div className="flex flex-col items-center justify-between mt-10 gap-3 ml-auto md:flex-row">
        <div className="flex-1">
            <Image
            src={testimonial.logo.src}
            alt={testimonial.logo.alt}
            width={400}
            height={400}
            />
        </div>
        <div className="flex-1 space-y-10 m-1 py-2">
            <h2 className="text-3xl font-bold text-[#4D4D4D] mb-7">{testimonial.title}</h2>
            <p>{testimonial.para}</p>
            <Link href={testimonial.cta.href}>{testimonial.cta.label}</Link>
        </div>
    </div>
    </>)
  
}

export default Testimonials
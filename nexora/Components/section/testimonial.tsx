import {testimonial} from "@/data/testimonial"
import Image from "next/image"
import Link from "next/link"

const Testimonials = () => {
    return (  <>
    <div>
        <div>
            <Image
            src={testimonial.logo.src}
            alt={testimonial.logo.alt}
            width={400}
            height={400}
            />
        </div>
        <div>
            <h2>{testimonial.title}</h2>
            <p>{testimonial.para}</p>
            <Link href={testimonial.cta.href}>{testimonial.cta.label}</Link>
        </div>
    </div>
    </>)
  
}

export default Testimonials
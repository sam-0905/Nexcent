import {testimonial} from "@/data/testimonial"
import Image from "next/image"

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
        </div>
    </div>
    </>)
  
}

export default Testimonials
import {testimonial} from "@/app/data/testimonial"
import Image from "next/image"
import Link from "next/link"

const Testimonials = () => {
    return (  <>
   <div className="flex flex-col items-center gap-3 px-6 py-10 md:flex-row md:justify-between lg:px-20">

        <div className="flex-1 mt-1 mb-1">
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

            
    <div className="flex flex-col items-center gap-3 bg-[#f5f7fa] px-6 py-10 md:flex-row          md:justify-between lg:px-20">
        <div className="flex-1 mt-2 mb-2 items-center ml-3">
            <Image
            src={testimonial.company.logo.src}
            alt={testimonial.company.logo.alt}
            width={300}
            height={300}
            />
        </div>
        <div className="flex-1 space-y-7 m-1 py-2 mb-5 mr-4 ">
            <p className="text-md text-[#666] mb-4">{testimonial.company.para}</p>
            <h2 className="text-2xl font-bold text-[#4caf4f] mb-7">{testimonial.company.title}</h2>
            <p className="text-gray-500">{testimonial.company.para2}</p>
             <div className="flex items-center justify-center gap-10 py-2">
                {testimonial.company.brandLogo.map((logo,index)=>(
            <Image key={index}src={logo.src}alt={logo.alt} width={50} height={50}/>
            ))}
            <Link 
            className="text-[#4caf4f] px-3 rounded text-md"
            href={testimonial.company.cta.href}>
                {testimonial.company.cta.label} →</Link>
         </div>

        </div>
    </div>
    

    </>)
  
}

export default Testimonials
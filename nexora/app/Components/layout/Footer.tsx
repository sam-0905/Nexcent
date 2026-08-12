import Image from "next/image";
import Link from "next/link";

import {footer} from "@/app/data/footer"

const Footer = () =>{

    return(
        <>             
       <div className="bg-[#263238] px-6 py-10 text-white lg:px-20">

           <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 bg-[#263238] text-white">

             <div className="flex flex-col gap-4">
              <Image
                src={footer.logo.src}
                alt={footer.logo.alt}
                width={150}
                height={40}
                className="object-contain"
            />

                <p className="text-sm text-gray-300">
                {footer.copyRight}
                </p>

                <p className="text-sm text-gray-300">
                {footer.text}
                </p>
             </div>
           </div>

         <div className="flex flex-col items-center lg:px-20 px-20">
            <h3 className="mb-5 text-xl font-semibold">
            Company
             </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-300 mb-8">
            {footer.company.map((company, index) => (
              <div key={index} className="flex flex-col gap-3">
                <Link href="#about" className="hover:text-white">
                  {company.about}
                </Link>

                <Link href="#blog" className="hover:text-white">
                  {company.blog}
                </Link>

                <Link href="#contact" className="hover:text-white">
                  {company.contactUs}
                </Link>

                <Link href="#pricing" className="hover:text-white">
                  {company.price}
                </Link>
              </div>
            ))}
          </div>
        </div>









         </div>


        </>
    )
}

export default Footer;
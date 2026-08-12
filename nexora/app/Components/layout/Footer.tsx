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

         </div>
        </>
    )
}

export default Footer;
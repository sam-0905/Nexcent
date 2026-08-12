import Image from "next/image";
import Link from "next/link";

import {footer} from "@/app/data/footer"

const Footer = () =>{

    return(
        <>             
       <div className="bg-[#263238] px-6 py-10 text-white lg:px-20 flex">

           <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 bg-[#263238] text-white">

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

         <div className="flex flex-col items-center lg:px-20 px-6">
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



        <div>
          <h3 className="mb-5 text-xl font-semibold">
            {footer.date}
          </h3>

          <div className="flex w-full max-w-sm items-center rounded-lg bg-white px-3 py-2">
            <input
              type={footer.input.type}
              placeholder={footer.input.placeholder}
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
            />

            <button
              type="button"
              className="ml-2 rounded-md bg-[#4caf4f] px-4 py-2 text-sm text-white"
            >
              →
            </button>
          </div>
        </div>






         </div>


        </>
    )
}

export default Footer;
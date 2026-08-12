import { HeaderData } from "@/Src/app/types/home";

export const headerData: HeaderData = {
  logo: {
    src: "/nexcent-logo-black.png",
    alt: "Nexcent Logo",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Features", href: "/features" },
    { label: "Products", href: "/products" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" }
  ]
}
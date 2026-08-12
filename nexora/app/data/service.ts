import { ServicesData } from "@/app/types/home";

    
export const servicesData: ServicesData = {
    title: "Our Clients",
    subtitle: "We have been working with some Fortune 500+ clients.",
    logo:[ 
        {src: "/icons/Logo-1.png",
        alt: "Company Logo"},
        {src: "/icons/Logo-2.png",
        alt: "Company Logo"},
        {src: "/icons/Logo-3.png",
        alt: "Company Logo"},
        {src: "/icons/Logo-4.png",
        alt: "Company Logo"},
        {src: "/icons/Logo-5.png",
        alt: "Company Logo"},
        {src: "/icons/Logo-6.png",
        alt: "Company Logo"},
         {src: "/icons/Logo-7.png",
        alt: "Company Logo"},
    ],
    title2: "Manage your entire community in a single system",
    subtitle2: "Who is Nextcent suitable for ?",
    services: [
        {
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: "/icons/members.png"
        },
        {
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: "/icons/National.png"
        },
        {
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: "/icons/Clubs.png"
        }
    ],

    client: {
         logo: {
           src: "/images/client-image.png",
           alt: "Client illustration",
            },

        title: "The unseen of spending three years at Pixelgrade",

        para:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",

         cta: {
            label: "Learn More",
           href: "#learn-more",
            },
  },
};
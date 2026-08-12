
export interface HeaderData {
    logo: {
        src: string;
        alt: string;
    };
    navigation: {
        label: string;
        href: string;
    }[];
}

export interface HeroData{
    title: string;
    subtitle: string;
    cta: {
        label: string;
        href: string;
    };
    image: {
        src: string;
        alt: string;
    };
}


export interface ServicesData {
    title: string;
    subtitle: string;
    logo: BrandLogo[];
    title2: string;
    subtitle2: string;
    services: {
        title: string;
        description: string;
        icon: string;
    }[];
    client : client
}

export interface BrandLogo {
    src: string;
    alt: string;
}

export interface client{
    logo:{
        src: string;
        alt: string;
    },
    title : string;
    para : string;
     cta: {
        label: string;
        href: string;
    },
}


export interface SupportData{
    status:Status
}

export interface Status {
  title: string;
  subtitle: string;

  achievements: {
    logo: {
      src: string;
      alt: string;
    };
    title: string;
    subtitle: string;
  }[];
}


export interface TestimonialData{
    logo:{
        src: string;
        alt: string;
    },
    title : string;
    para : string;
     cta: {
        label: string;
        href: string;
    },
    company: AboutCompany
}


export interface AboutCompany{
    logo:{
        src: string;
        alt: string;
    },
    para : string;
    title : string;
    para2 : string;
    brandLogo:BrandLogo[]
     cta: {
        label: string;
        href: string;
    },
}

export interface MarketingData{
    title: string;
    subtitle: string;
    cards:{
        logo:{
        src: string;
        alt: string;
    },
    title: string;
    cta: {
        label: string;
        href: string;
    },
    }[]

    heading:string;
    cta: {
        label: string;
        href: string;
    },
}
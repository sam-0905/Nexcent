import Header from "@/app/Components/layout/Header";
import Hero from "@/app/Components/section/Hero";
import Marketing from "@/app/Components/section/Marketing";
import Services from "@/app/Components/section/Services";
import Support from "@/app/Components/section/Support";
import Testimonials from "@/app/Components/section/Testimonial";

export default function Home() {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        <Services />
        <Support/>
        <Testimonials/>
        <Marketing/>
      </main>
    </div>
  );
}

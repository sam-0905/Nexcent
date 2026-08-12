import Header from "@/Components/layout/Header";
import Hero from "@/Components/section/Hero";
import Marketing from "@/Components/section/Marketing";
import Services from "@/Components/section/Services";
import Support from "@/Components/section/Support";
import Testimonials from "@/Components/section/Testimonial";

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

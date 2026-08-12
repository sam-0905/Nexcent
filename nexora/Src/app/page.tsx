import Header from "@/Src/app/Components/layout/Header";
import Hero from "@/Src/app/Components/section/Hero";
import Marketing from "@/Src/app/Components/section/Marketing";
import Services from "@/Src/app/Components/section/Services";
import Support from "@/Src/app/Components/section/Support";
import Testimonials from "@/Src/app/Components/section/Testimonial";

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

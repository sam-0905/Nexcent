import Header from "@/Components/layout/Header";
import Hero from "@/Components/section/Hero";
import Services from "@/Components/section/services";
import Support from "@/Components/section/support";
import Testimonials from "@/Components/section/testimonial";

export default function Home() {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        <Services />
        <Support/>
        <Testimonials/>
      </main>
    </div>
  );
}

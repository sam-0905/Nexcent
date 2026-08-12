import Header from "@/Components/layout/Header";
import Hero from "@/Components/section/Hero";
import Services from "@/Components/section/services";
import Support from "@/Components/section/support";

export default function Home() {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        <Services />
        <Support/>
      </main>
    </div>
  );
}

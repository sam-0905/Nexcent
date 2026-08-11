import Header from "@/Components/layout/Header";
import Hero from "@/Components/section/Hero";
import Services from "@/Components/section/services";

export default function Home() {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

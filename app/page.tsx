import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";


export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedGrid/>

      
      <footer className="h-[20vh] flex items-center justify-center border-t border-neutral-800 text-neutral-600 text-xs tracking-widest">
        DESIGNED & DEVELOPED BY YOU
      </footer>
    </main>
  );
}
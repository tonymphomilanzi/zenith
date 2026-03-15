import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";
import CustomCursor from "@/components/CustomCursor"; // Import here


export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedGrid/>

      
      <footer className="h-[20vh] flex items-center justify-center border-t border-neutral-800 text-neutral-600 text-xs tracking-widest">
        ZENIH 
      </footer>
    </main>
  );
}
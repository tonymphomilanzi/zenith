import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen cursor-none">
      <CustomCursor /> {/* The Magic Glow */}
      
      <Navbar />
      <Hero />
      <FeaturedGrid/>

      
      <Footer />
    </main>
  );
}
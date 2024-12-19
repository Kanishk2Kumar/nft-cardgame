import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-w-full bg-red-50">
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-white"></div>
      <div className="min-h-screen bg-black"></div>
    </div>
  );
}

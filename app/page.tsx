import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import AboutPreview from "@/components/home/AboutPreview";
import Activities from "@/components/home/Activities";
import GalleryPreview from "@/components/home/GalleryPreview";
import DonationCTA from "@/components/home/DonationCTA";
import WhatsAppButton from "@/components/common/WhatsAppButton";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImpactStats />
      <AboutPreview />
      <Activities />
      <GalleryPreview />
      <DonationCTA />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
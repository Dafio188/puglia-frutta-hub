
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import MarketTrends from "@/components/MarketTrends";
import LocalExcellence from "@/components/LocalExcellence";
import VirtualMarket from "@/components/VirtualMarket";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <MarketTrends />
        <LocalExcellence />
        <VirtualMarket />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SkillCards from "@/components/SkillCards";
import Categories from "@/components/Categories";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SkillCards />
      <Categories />
      <CTAFooter />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

import MainLayout from "../../components/layout/MainLayout";

import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import DashboardPreview from "../../components/home/DashboardPreview";
import Features from "../../components/home/Features";
import HowItWorks from "../../components/home/HowItWorks";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </MainLayout>
  );
}

export default Home;

import CustomCursor from '../components/CustomCursor';
import FloatingParticles from '../components/FloatingParticles';
import HeroSection from '../components/HeroSection';
import PromiseCards from '../components/PromiseCards';
import PromiseRing3D from '../components/PromiseRing3D';
import PromiseMessage from '../components/PromiseMessage';
import VowSection from '../components/VowSection';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Index = () => {

  return (
    <div className="proposal-page relative min-h-screen overflow-x-hidden bg-background">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <PromiseCards />
        <PromiseRing3D />
        <PromiseMessage />
        <VowSection />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Index;

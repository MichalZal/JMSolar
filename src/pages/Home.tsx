import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Dotacje from '../components/Dotacje';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CtaBand from '../components/CtaBand';
import Realizacje from '../components/Realizacje';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function useFadeIn() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('fade-in--visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useFadeIn();
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Dotacje />
      <Process />
      <Testimonials />
      <CtaBand />
      <Realizacje />
      <Contact />
      <Footer />
    </>
  );
}

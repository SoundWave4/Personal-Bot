import Hero from '../components/Hero/Hero';
import TrustBar from '../components/TrustBar/TrustBar';
import Services from '../components/Services/Services';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import ChatbotDemo from '../components/ChatbotDemo/ChatbotDemo';
import FAQ from '../components/FAQ/FAQ';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import AnimateOnScroll from '../components/AnimateOnScroll';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <AnimateOnScroll>
        <Services />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ChatbotDemo />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <FAQ />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <About />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Contact />
      </AnimateOnScroll>
    </>
  );
}

export default HomePage;

import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import About from '../components/About/About';
import ChatbotDemo from '../components/ChatbotDemo/ChatbotDemo';
import Contact from '../components/Contact/Contact';
import AnimateOnScroll from '../components/AnimateOnScroll';

function HomePage() {
  return (
    <>
      <Hero />

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
        <About />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Contact />
      </AnimateOnScroll>
    </>
  );
}

export default HomePage;

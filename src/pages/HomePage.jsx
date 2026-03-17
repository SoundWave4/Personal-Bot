import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import About from '../components/About/About';
import ChatbotDemo from '../components/ChatbotDemo/ChatbotDemo';
import Contact from '../components/Contact/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />

      <ChatbotDemo />

      <About />
      <Contact />
    </>
  );
}

export default HomePage;

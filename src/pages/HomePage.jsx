import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />

      <section id="chatbot-demo">
        {/* ChatbotDemo component — Task 5 */}
      </section>

      <About />
      <Contact />
    </>
  );
}

export default HomePage;

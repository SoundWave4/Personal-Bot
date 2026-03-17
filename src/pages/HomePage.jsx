import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import About from '../components/About/About';

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

      <section id="contact">
        {/* Contact component — Task 4 */}
      </section>
    </>
  );
}

export default HomePage;

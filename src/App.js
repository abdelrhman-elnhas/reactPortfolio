import { ThemeProvider } from "styled-components";
import { useRef } from "react";
import { Container, AEtheme } from "./App.styles";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import MidSection from "./components/MidSection/MidSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const contactref = useRef();
  const portfolioref = useRef();

  const scrollToContact = () => {
    contactref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    portfolioref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={AEtheme}>
      <Container>
        <Navbar />
        <ScrollTop />
        <Hero
          scrollToContact={scrollToContact}
          scrollToPortfolio={scrollToPortfolio}
        />
        <About />
        <Services />
        <MidSection />
        <Portfolio ref={portfolioref} />
        <Contact ref={contactref} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

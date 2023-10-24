import { ThemeProvider } from "styled-components";
import { Container, AEtheme } from "./App.styles";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import MidSection from "./components/MidSection/MidSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={AEtheme}>
      <Container>
        <Navbar />
        <Home />
        <About />
        <Services />
        <MidSection />
        <Portfolio />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

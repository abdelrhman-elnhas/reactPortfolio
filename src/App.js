import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Container, AEtheme } from "./App.styles";
import { useRef } from "react";
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
    <BrowserRouter>
      <ThemeProvider theme={AEtheme}>
        <Container>
          <Navbar />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
          <Home />
          <About />
          <Services />
          <MidSection />
          <Portfolio />
          <Contact />
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

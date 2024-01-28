import React from "react";
import { Container, AEtheme } from "./FullPortfolio.styles";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "styled-components";

function FullPortfolio() {
  return (
    <ThemeProvider theme={AEtheme}>
      <Container>
        <Navbar />
        <Projects />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default FullPortfolio;

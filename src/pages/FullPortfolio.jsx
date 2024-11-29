import React from "react";
import { Container, AEtheme } from "./FullPortfolio.styles";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet-async";

function FullPortfolio() {
  return (
    <>
      <Helmet>
        <title>AE | Projects</title>
        <meta
          name="description"
          content="Explore my journey as a Frontend Software Developer. See projects that demonstrate creativity, technical expertise, and modern web development skills."
        />
        <link
          rel="canonical"
          href="https://abdelrhman-elnhas.vercel.app/projects"
        />
      </Helmet>

      <ThemeProvider theme={AEtheme}>
        <Container>
          <Navbar />
          <Projects />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default FullPortfolio;

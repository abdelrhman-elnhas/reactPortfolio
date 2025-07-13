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
        <title>Projects | Abdelrhman Elnhas – Frontend Developer</title>
        <meta
          name="description"
          content="Browse featured projects by Abdelrhman Elnhas — showing frontend development, design thinking, and UI/UX skills in action."
        />
        <link rel="canonical" href="https://abdelrhman-elnhas.com/projects" />
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

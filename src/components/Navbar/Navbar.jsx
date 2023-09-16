import React from 'react'
import {Section , Container , Links , Logo , Link} from './Navbar.styles';
import {HashLink} from 'react-router-hash-link';

const nodecoration = {
  textDecoration: "none",
  color: "inherit"
}

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src='./images/Logo.png'/>
          <Link><HashLink style={nodecoration} smooth to="#home">Home</HashLink></Link>
          <Link><HashLink style={nodecoration} to="#about">About</HashLink></Link>
          <Link><HashLink style={nodecoration} to="#services">Services</HashLink></Link>
          <Link><HashLink style={nodecoration} to="#portfolio">Portfolio</HashLink></Link>
          <Link><HashLink style={nodecoration} to="#contact">Contact</HashLink></Link>
        </Links>
      </Container>
    </Section>
  );
}

export default Navbar
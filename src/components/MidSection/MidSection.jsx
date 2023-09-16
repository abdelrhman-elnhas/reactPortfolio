import React from 'react'
import {Link} from 'react-router-dom';
import CV from '../../Files/cv.pdf';
import {Container , Title , Desc , ButtonGroup , Button} from './MidSection.styles';

function MidSection() {
  return (
    <Container>
      <Title>Have Any Projects in mind?</Title>
      <Desc>Let's build a project together , I'm always honoured to work with great people.</Desc>
      <ButtonGroup>
        <Link
        to={CV}
        download="AbdelrhmanElnhasCV"
        target="_blank"
        rel="noreferrer"><Button>Download CV</Button></Link>
        <Button onClick={() => window.location = 'mailto:abdelrhman.elnhas1@gmail.com?subject=I WANT TO HIRE YOU!'}>Hire Me</Button>
      </ButtonGroup>
    </Container>
  )
}

export default MidSection
import React from 'react'
import ProgressBar from './ProgressBar';
import {Section , Container , LeftSide , Title , Desc , Name , RightSide } from './About.styles';


function About() {
  return (
    <Section id='about'> 
      <Container>
        <LeftSide>
          <Title>
            &lt; About &gt;
          </Title>
          <Desc><Name>Hi There! I'm Abdelrhman Elnhas.</Name> I'm an Electrical Engineering Student, Majoring in computers and control systems. I have passion for all things that fall under the scope of technology, programming and design. In addition to my love of technology and design , I'm also interested in languages. Here you can see some of my skills.</Desc>
        </LeftSide>
        <RightSide>
          <ProgressBar skill="HTML" rate="90%"/>
          <ProgressBar skill="CSS" rate="85%"/>
          <ProgressBar skill="Javascript" rate="75%"/>
          <ProgressBar skill="React" rate="60%"/>
          <ProgressBar skill="Bootstrap" rate="90%"/>
          <ProgressBar skill="SASS" rate="80%"/>
          <ProgressBar skill="Python" rate="80%"/>
          <ProgressBar skill="Laravel" rate="50%"/>
          <ProgressBar skill="MySQL" rate="75%"/>
          <ProgressBar skill="Photoshop" rate="90%"/>
          <ProgressBar skill="Illustrator" rate="80%"/>
          <ProgressBar skill="XD" rate="80%"/>
          <ProgressBar skill="Figma" rate="60%"/>
        </RightSide>
      </Container>
    </Section>
  )
}

export default About
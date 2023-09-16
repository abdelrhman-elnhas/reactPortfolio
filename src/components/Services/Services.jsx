import React from 'react'
import ServiceCard from './ServiceCard';
import {Section , Container , Title , Desc , CardSection} from './Services.styles';

function Services() {
  return (
    <Section id='services'>
      <Container>
          <Title>&lt; Services &gt;</Title>
          <Desc>Here is What I can do for you ...</Desc>
          <CardSection>
            <ServiceCard image="./images/data.png" title="Web Development" content="I like to code things from scratch , and enjoy bringing ideas to life in the browser."/>
            <ServiceCard image="./images/website.png" title="UI / UX Design" content="I value Simple Content structure , clean deign patterns , and thoughtful interactions."/>
            <ServiceCard image="./images/vector.png" title="Graphic Design" content="Art is a question to a problem , design is the solution to it. and I like solving problems."/>
          </CardSection>
      </Container>
    </Section>
  )
}


export default Services
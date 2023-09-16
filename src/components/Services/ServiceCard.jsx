import React from 'react';
import {Container , Row , LogoBlock , Logo , Title , Content} from './ServiceCard.styles';



function ServiceCard(props) {
  return (
    <Container>
      <Row>
        <LogoBlock>
          <Logo src={props.image}/>
        </LogoBlock>
        <Title>{props.title}</Title>  
      </Row>
      <Content>{props.content}</Content>
    </Container>
  )
}

export default ServiceCard
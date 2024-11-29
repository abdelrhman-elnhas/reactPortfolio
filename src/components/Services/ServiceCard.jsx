import {
  Container,
  Row,
  LogoBlock,
  Logo,
  Title,
  Content,
  Card,
} from "./ServiceCard.styles";

function ServiceCard(props) {
  return (
    <Container>
      <Card>
        <Row>
          <LogoBlock>
            <Logo src={props.image} alt={props.alt} loading="lazy" />
          </LogoBlock>
          <Title>{props.title}</Title>
        </Row>
        <Content>{props.content}</Content>
      </Card>
    </Container>
  );
}

export default ServiceCard;

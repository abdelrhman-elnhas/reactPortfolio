import ServiceCard from "./ServiceCard";
import {
  Section,
  Container,
  Title,
  Desc,
  CardSection,
} from "./Services.styles";

function Services() {
  return (
    <Section id="services">
      <Container>
        <Title>&lt; Services &gt;</Title>
        <Desc>Here is What I can do for you ...</Desc>
        <CardSection>
          <ServiceCard
            image="./images/data.png"
            alt="Web Development Icon"
            loading="lazy"
            title={["Web", "\n", "Development"]}
            content="I like to code things from scratch , and enjoy bringing ideas to life in the browser."
          />
          <ServiceCard
            image="./images/website.png"
            alt="UI/UX Design Icon"
            loading="lazy"
            title={["UI / UX", "\n", "Design"]}
            content="I value Simple Content structure , artistic deisgns and awesome interactions."
          />
          <ServiceCard
            image="./images/vector.png"
            alt="Graphic Design Icon"
            loading="lazy"
            title={["Graphic", "\n", "Design"]}
            content="Art is a problem , design is the solution to it, and I like solving problems."
          />
        </CardSection>
      </Container>
    </Section>
  );
}

export default Services;

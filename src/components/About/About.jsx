import ProgressBar from "./ProgressBar";
import {
  Section,
  Container,
  AboutContent,
  Title,
  Desc,
  Name,
  AboutBars,
} from "./About.styles";

function About() {
  return (
    <Section id="about">
      <Container>
        <AboutContent>
          <Title>&lt; About &gt;</Title>
          <Desc>
            <Name>Hi There! I'm Abdelrhman Elnhas.</Name> I'm an Electrical
            Engineering Student, Majoring in computers and control systems. I
            have passion for all things that fall under the scope of technology,
            programming and design. In addition to my love of technology and
            design , I'm also interested in languages. Here you can see some of
            my skills.
          </Desc>
        </AboutContent>
        <AboutBars>
          <ProgressBar skill="React" rate="75%" />
          <ProgressBar skill="Javascript" rate="80%" />
          <ProgressBar skill="Redux Toolkit" rate="70%" />
          <ProgressBar skill="Tailwind" rate="60%" />
          <ProgressBar skill="Bootstrap" rate="90%" />
          <ProgressBar skill="Styled-Components" rate="60%" />
          <ProgressBar skill="SASS" rate="60%" />
          <ProgressBar skill="Python" rate="70%" />
          <ProgressBar skill="Laravel" rate="50%" />
          <ProgressBar skill="MySQL" rate="75%" />
          <ProgressBar skill="Photoshop & Illustrator" rate="80%" />
          <ProgressBar skill="XD &Figma" rate="70%" />
        </AboutBars>
      </Container>
    </Section>
  );
}

export default About;

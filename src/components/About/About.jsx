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
            <Name>Hi There! I'm Abdelrhman Elnhas.</Name> I'm a{" "}
            <b>Frontend Software Engineer</b> with <b>2+ years </b> of
            experience in crafting engaging, interactive user interfaces using
            <b>Vanilla JavaScript and React JS.</b> With a strong foundation in
            <b>Graphic Design and UI/UX Design</b>, blending creativity with
            technical proficiency. Proficient in core <b>Backend Development</b>
            concepts, offering a holistic understanding of the project
            lifecycle. A dedicated professional with a profound passion for
            technology and a commitment to programming excellence.
          </Desc>
        </AboutContent>
        <AboutBars>
          <ProgressBar skill="ReactJS" rate="85%" />
          <ProgressBar skill="Javascript" rate="80%" />
          <ProgressBar skill="Typescript" rate="60%" />
          <ProgressBar skill="Redux Toolkit" rate="70%" />
          <ProgressBar skill="TailwindCSS" rate="70%" />
          <ProgressBar skill="Bootstrap" rate="90%" />
          <ProgressBar skill="Styled-Components" rate="60%" />
          <ProgressBar skill="SASS" rate="80%" />
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

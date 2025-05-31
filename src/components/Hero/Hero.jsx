import "./hero.css";
import {
  Section,
  Container,
  HeroContent,
  Hello,
  Name,
  Titles,
  ButtonGroup,
  ButtonSec,
  ButtonMain,
  HeroImage,
  Photo,
  SocialMedia,
  List,
  ListItem,
  Anchor,
} from "./Hero.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareBehance,
  faSquareWhatsapp,
  faSquareGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function Hero({ scrollToContact, scrollToPortfolio }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <Section>
      <Container>
        <HeroContent>
          <Hello>Hello, I'm</Hello>
          <Name>Abdelrhman Elnhas</Name>
          <Titles>
            Frontend Developer | UI/UX Designer | Graphic Designer{" "}
          </Titles>
          <ButtonGroup>
            <ButtonMain onClick={handleClick}>View My Work</ButtonMain>
            <ButtonSec onClick={scrollToContact}>Contact ME</ButtonSec>
          </ButtonGroup>
        </HeroContent>
        <HeroImage>
          <Photo src="./images/photo1.png" alt="Abdelrhman Elnhas Photo" />
        </HeroImage>
        <SocialMedia>
          <List>
            <ListItem>
              <Anchor
                href="https://www.linkedin.com/in/abdelrhman-elnhas"
                target="_blank"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedin} size="xl" />
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="https://www.behance.net/_ae_studio" target="_blank">
                <FontAwesomeIcon
                  className="icon"
                  icon={faSquareBehance}
                  size="xl"
                />
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                href="https://www.github.com/abdelrhman-elnhas"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faSquareGithub}
                  size="xl"
                />
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="https://www.twitter.com/a_elnhas1" target="_blank">
                <FontAwesomeIcon
                  className="icon"
                  icon={faSquareXTwitter}
                  size="xl"
                />
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor href="https://wa.me/+201127698622" target="_blank">
                <FontAwesomeIcon
                  className="icon"
                  icon={faSquareWhatsapp}
                  size="xl"
                />{" "}
              </Anchor>
            </ListItem>
          </List>
        </SocialMedia>
      </Container>
    </Section>
  );
}

export default Hero;

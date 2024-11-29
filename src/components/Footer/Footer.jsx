import {
  Section,
  Container,
  Text,
  Name,
  Copyright,
  Logo,
} from "./Footer.styles";

function Footer() {
  return (
    <Section>
      <Container>
        <Text>
          Designed & Developed by <Name>Abdelrhman A. Elnhas</Name>
        </Text>
        <Copyright>
          copyrights &copy; 2023. All rights reserved by{" "}
          <span>
            <Logo src="./images/LogoC.png" alt="AE Logo" loading="lazy" />
          </span>
        </Copyright>
      </Container>
    </Section>
  );
}

export default Footer;

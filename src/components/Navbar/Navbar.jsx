import { Section, Container, Links, Logo, Link } from "./Navbar.styles";
import { HashLink } from "react-router-hash-link";
import { Link as LinkR } from "react-router-dom";

const nodecoration = {
  textDecoration: "none",
  color: "inherit",
};

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <LinkR style={nodecoration} smooth={+true} to="/">
            <Logo src="./images/Logo.png" alt="AE Logo" />
          </LinkR>
          <Link>
            <LinkR style={nodecoration} smooth={+true} to="/">
              Home
            </LinkR>
          </Link>
          <Link>
            <HashLink style={nodecoration} smooth={+true} to="/#about">
              About
            </HashLink>
          </Link>
          <Link>
            <HashLink style={nodecoration} smooth={+true} to="/#services">
              Services
            </HashLink>
          </Link>
          <Link>
            <HashLink style={nodecoration} smooth={+true} to="/#portfolio">
              Portfolio
            </HashLink>
          </Link>
          <Link>
            <HashLink style={nodecoration} smooth={+true} to="/#contact">
              Contact
            </HashLink>
          </Link>
        </Links>
      </Container>
    </Section>
  );
}

export default Navbar;

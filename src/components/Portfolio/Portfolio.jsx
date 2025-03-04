import React, { useEffect, useRef, useState } from "react";
import {
  Section,
  Title,
  Desc,
  Container,
  LeftSide,
  Screen,
  ProjectImage,
  RightSide,
  BarGroup,
  Bar,
  Button,
  Update,
} from "./Portfolio.syles";
import { Link } from "react-router-dom";

const nodecoration = {
  textDecoration: "none",
  color: "inherit",
};

const Portfolio = React.forwardRef((props, portfolioref) => {
  let projectImage = useRef();

  const LinkHandler = (image) => {
    projectImage.current.src = `./images/${image}.jpg`;
  };

  const [projects, setProjects] = useState([]);

  const url = "https://cropcopter.net/api/get/all";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const limitedData = projects.slice(0, 7);

  return (
    <Section id="portfolio" ref={portfolioref}>
      <Container>
        <LeftSide>
          <Title>&lt; Portfolio &gt;</Title>
          <Desc>These Are Some Projects I've Worked On..</Desc>
          <Screen>
            <ProjectImage
              ref={projectImage}
              src={`./images/Proj44.jpg`}
              alt="Project Image"
              loading="lazy"
            />
          </Screen>
        </LeftSide>
        <RightSide>
          <BarGroup>
            {limitedData.map((project, index) => (
              <Bar
                key={index}
                onClick={() => {
                  LinkHandler(project.image);
                }}
              >
                {project.title}
              </Bar>
            ))}
            <Button>
              <Link to="/projects" smooth={+true} style={nodecoration}>
                Explore More!
              </Link>
            </Button>
          </BarGroup>
        </RightSide>
      </Container>
      <Update>Last Update On March 2025</Update>
    </Section>
  );
});

export default Portfolio;

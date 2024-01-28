import { useEffect, useState } from "react";
import {
  Section,
  Container,
  Filters,
  FilterButton,
  ProjectsSection,
} from "./Projects.styles";
import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Web", "UI-UX", "Graphic Design"];

  // Function to fetch All Projects
  async function getAllProjects() {
    await fetch("https://cropcopter.net/api/get/all")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.error(err));
  }
  // Function fetches projects by category
  function getProjectByCategory(category) {
    fetch(`https://cropcopter.net/api/get/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(
          data.filter((project) => project.category === `${category}`)
        );
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <Section>
      <Container>
        <Filters>
          {/* <FilterButton onClick={() => {getAllProjects();}}>All</FilterButton> */}
          {categories.map((cat) => {
            return (
              <FilterButton
                className={activeTab === cat && "activeCat"}
                key={cat}
                onClick={() => {
                  if (cat === "All") {
                    setActiveTab(cat);
                    getAllProjects();
                  } else {
                    setActiveTab(cat);
                    getProjectByCategory(cat);
                  }
                }}
              >
                {cat === "UI-UX" ? "UI/UX" : cat}
                {cat === "All" ? " " : " Projects"}
              </FilterButton>
            );
          })}
        </Filters>
        <ProjectsSection>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                category={project.category}
                date={project.date}
                url={project.url}
              ></ProjectCard>
            );
          })}
        </ProjectsSection>
      </Container>
    </Section>
  );
}

export default Projects;

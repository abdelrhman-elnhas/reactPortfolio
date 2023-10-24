import React , {useEffect, useRef, useState}   from 'react'
import {Section , Container , Filters , FilterButton , ProjectsSection} from "./Projects.styles"
import ProjectCard from './ProjectCard';

function Projects() {

  const [projects , setProjects] = useState([]);
  const categories = ["Web" , "UI/UX" , "Graphic Design"];




  function getAllProjects(){
    fetch('http://localhost:9000/projects').then((res)=> res.json()).then((data) => {
      setProjects(data);
    });

  // fetch("../../../projects.json")
  // .then((res) => res.json())
  // .then((data) => setProjects(data));

  }

  function getProjectByCategory(category){
    fetch(`http://localhost:9000/projects?category=${category}`).then((res)=> res.json()).then((data) => {
      setProjects(data);
    });
  }
  
  useEffect(() => {
    getAllProjects();
  }, [])

  return (
    <Section>
      <Container>
        <Filters>
        <FilterButton onClick={() => {getAllProjects();}}>All</FilterButton>
        {categories.map((cat) => {
          return(
            <FilterButton key={cat} onClick={() => {getProjectByCategory(cat);}}>{cat} Projects</FilterButton>
          )
        })}
        </Filters>
        <ProjectsSection>
          {
            projects.map((project) => {
              return(
                <ProjectCard key={project.id} title={project.title} image={project.image} category={project.category} date={project.date}></ProjectCard>
              )
            })
          }
        </ProjectsSection>
      </Container>
    </Section>
  )
}

export default Projects
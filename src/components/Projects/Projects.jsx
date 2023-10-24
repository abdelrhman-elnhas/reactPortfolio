import React , {useEffect, useRef, useState}   from 'react'
import {Section , Container , Filters , FilterButton , ProjectsSection} from "./Projects.styles"
import ProjectCard from './ProjectCard';
import { Value } from './../About/ProgressBar.styles';

function Projects() {

  const [projects , setProjects] = useState([]);
  const categories = ["Web" , "UI/UX" , "Graphic Design"];
  

  function getAllProjects(){
      fetch('https://abdelrhman-elnhas.github.io/off/projects.json').then((res)=> res.json()).then((data) => {
        setProjects(data['projects']);
        // console.log(data['projects']);
      });
  }


  function getProjectByCategory(cat){
    fetch(`https://abdelrhman-elnhas.github.io/off/projects.json`).then((res)=> res.json()).then((data) => {
      setProjects(projects.filter(project =>
        project.category === `${cat}`
      ));
      console.log(projects);

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
            // <ProjectCard>{projects.values}</ProjectCard>
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
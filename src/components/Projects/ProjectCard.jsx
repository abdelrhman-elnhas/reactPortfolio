import React from 'react';
import {Card , Thumb , Tag , ProjectImage , Badge , Title , Date} from './ProjectCard.styles';

function ProjectCard({title , image , category , date}) {
  return (
    <Card>
      <Thumb>
        <Tag>{category}</Tag>
        <ProjectImage src={`./images/${image}.jpg`}/>
      </Thumb>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Card>
  );
}

export default ProjectCard
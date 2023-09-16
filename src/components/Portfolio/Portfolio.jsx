import React , {useRef} from 'react'
import {Section , Title , Desc , Container , LeftSide , Screen , ProjectImage , RightSide , BarGroup , Bar , Button , Update} from './Portfolio.syles';

function Portfolio() {

  var projects = ["CropCopter Website" ,
                  "Almonofey Website" ,
                  "Enchante Website" ,
                  "ElDolphin Website" ,
                  "All Traders Ui/UX Design" ,
                  "Nile ICT Ui/UX Design" ,
                  "Simple Steps Designs"];
  
  let projectImage = useRef();
  
  const LinkHandler = (index) => {
    projectImage.current.src = `./images/Proj${index+1}.jpg`;
  }


  return (
    <Section id='portfolio'>
      <Title>&lt; Portfolio &gt;</Title>
      <Desc>These Are Some Projects I've Worked On..</Desc>
      <Container>
        <LeftSide>
          <Screen>
            <ProjectImage ref={projectImage} src='./images/Proj1.jpg' />
          </Screen>
        </LeftSide>
        <RightSide>
          <BarGroup>
            {projects.map( (project , index) => <Bar key={index} onClick={() => { LinkHandler(index); }}>
            {project}</Bar> )}
          </BarGroup>
          <Button>Explore More!</Button>
        </RightSide>
      </Container>
      <Update>Last Update On Septemper 2023</Update>
    </Section>
  )
}

export default Portfolio
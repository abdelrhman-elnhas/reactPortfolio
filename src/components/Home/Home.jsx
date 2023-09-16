import React, { Suspense } from 'react'
import Navbar from '../Navbar/Navbar'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {Section , Container , LeftSide , Hello , Name , Titles , ButtonGroup , ButtonSec, ButtonMain , RightSide , Photo} from './Home.styles';


function Home() {
  return (
    <Section>
      {/* <Navbar/> */}
      <Container>
        <LeftSide>
          <Hello>Hello, I'm</Hello>
          <Name>Abdelrhman Elnhas</Name>
          <Titles>Frontend Developer | UI/UX Designer | Graphic Designer </Titles>
          <ButtonGroup>
            <ButtonMain>View My Work</ButtonMain>
            <ButtonSec>Contact ME</ButtonSec>
          </ButtonGroup>
        </LeftSide>
        <RightSide>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={2} />
              <directionalLight position={[5, 4, 5]} />
              <Sphere args={[1, 150, 350]} scale={2.4}>
                <MeshDistortMaterial
                  color="#701818"
                  attach="material"
                  distort={0.4}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Photo src='./images/PersonalPhoto.png'/>
        </RightSide>
      </Container>
    </Section>
  )
}

export default Home
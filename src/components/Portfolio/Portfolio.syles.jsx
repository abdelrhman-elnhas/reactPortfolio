import { styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  /* min-height: 100vh; */
  margin: 20px 0;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`


export const Title = styled.p`
  font-size: 50px;
  color: ${props => props.theme.thirdColor};
  margin-bottom: -20px;

  @media (max-width: 850px) {
    font-size: 45px;
  }

`

export const Desc = styled.p`
  font-size: 35px;
  color: ${props => props.theme.thirdColor};
  @media (max-width: 965px) {
    font-size: 30px;
  }
  @media (max-width: 850px) {
    font-size: 25px;
  }
`

export const LeftSide = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  
  @media (max-width: 1095px) {
    padding-left: 30px;
  }
  @media (max-width: 768px) {
    flex: unset;
    padding-left: 65px;
  }
  @media (max-width:598px) {
    padding-left: 50px;
  }
  @media (max-width:498px) {
    padding-left: 40px;
    margin-bottom: -40px;
  }
`

export const RightSide = styled.div`
  flex: 2;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (max-width: 1095px) {
    padding-right: 30px;
  } 
  @media (max-width: 768px) {
    flex: unset;
    width: 80%;
  }

`

export const Screen = styled.div`
  background-color: ${props => props.theme.thirdColor};
  border-radius: 20px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3/2;

`

export const ProjectImage = styled.img`
  width: 80%;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
`

export const BarGroup = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  
`

export const Bar = styled.span`
  font-size: 1.2rem;
  text-align: center;
  content: "";
  background-color: ${ props => props.theme.mainColor};
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ props => props.theme.thirdColor};
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;

  &:hover{
    font-size: 1.2rem;  
    content: "";
    background-color: ${ props => props.theme.thirdColor};
    color: ${ props => props.theme.mainColor};
    border-radius: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    -ms-border-radius: 50px;
    -o-border-radius: 50px;
    color: ${ props => props.theme.mainColor};
  }
`


export const Button = styled.button`
  transition: all 0.2s ease-in;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: ${props => props.theme.thirdColor};
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 50px;
  background: ${props => props.theme.mainColor};
  border: 3px solid ${props => props.theme.thirdColor};
  align-self: center;
  margin-top: 25px;
  
  &:active {
  color: ${props => props.theme.thirdColor};
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50px;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${props => props.theme.thirdColor};
    border-radius: 50px;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: ${props => props.theme.mainColor};
    border: 3px solid ${props => props.theme.thirdColor};
  }

  &:hover:before {
    top: -35%;
    background-color: ${props => props.theme.thirdColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: ${props => props.theme.thirdColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`

export const Update = styled.div`
  width: 100%;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.thirdColor};
  font-size: 20px;
  text-align: center;
  padding: 25px;
  margin-top: 30px;
`
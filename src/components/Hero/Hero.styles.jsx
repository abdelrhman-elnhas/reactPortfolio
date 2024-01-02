import { styled } from 'styled-components';


export const Section = styled.div`
  display: flex;
  justify-content: center;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  position: relative;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: calc(100vh - 98px);
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 20px ;

  @media (max-width: 1155px) {
    padding: 0px 0px 0px 50px ;
  }

  @media (max-width: 424px) {
    justify-content: center;
  }
`

export const Hello = styled.p`
  font-size: 60px;
  margin-bottom: -70px;
  color: ${props => props.theme.thirdColor};
  position: relative;

  &::before {
  content: "";
  position: absolute;
  background-color: ${props => props.theme.thirdColor};
  width: 8px;
  height: 70px;
  margin-top: 14px;
  margin-left: -20px;

    @media (max-width: 996px) {
      height: 52px;
      margin-top: 10px;
    }

    @media (max-width: 424px) {
      height: 45px;
      margin-top: 7px;
    }
  }

  @media (max-width: 996px) {
    font-size: 40px;
    margin-bottom: -40px;
  }

  @media (max-width: 424px) {
    font-size: 30px;
    margin-bottom: -30px;
  }
`

export const Name = styled.p`
  font-size: 60px;
  margin-bottom: -20px;
  color: ${props => props.theme.fourthColor};
  position: relative;

  @media (max-width: 996px) {
    font-size: 40px;
    margin-bottom: 0px;
  }

  @media (max-width: 424px) {
    font-size: 30px;
    margin-bottom: 10px;
  }

  &::before {
  content: "";
  position: absolute;
  background-color: ${props => props.theme.mainColor};
  width: 8px;
  height: 70px;
  margin-top: 30px;
  margin-left: -20px;

    @media (max-width: 996px) {
      height: 52px;
      margin-top: 25px;
    }
    @media (max-width: 424px) {
      height: 45px;
      margin-top: 20px;
    }
  }

`

export const Titles = styled.p`
  font-size: 20px;
  letter-spacing: 0.8px;
  color: ${props => props.theme.thirdColor};

  @media (max-width: 996px) {
    font-size: 14px;
    letter-spacing: 0.6px;
    margin-top: 8px;
  }

  @media (max-width: 424px) {
    font-size: 12px;
    letter-spacing: 0.4px;
    margin-top: 4px;
  }

`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const ButtonMain = styled.button`
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

  @media (max-width: 996px) {
    font-size: 16px;
    padding: 0.7em 1.5em;
  }

  @media (max-width: 424px) {
    font-size: 12px;
    padding: 0.7em 1.5em;
  }

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

export const ButtonSec = styled.button`
  transition: all 0.2s ease-in;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: ${props => props.theme.mainColor};
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 50px;
  background: ${props => props.theme.thirdColor};
  border: 3px solid ${props => props.theme.mainColor};

  @media (max-width: 996px) {
    font-size: 16px;
    padding: 0.7em 1.5em;
  }

  @media (max-width: 424px) {
    font-size: 12px;
    padding: 0.7em 1.5em;
  }

  &:active {
  color: ${props => props.theme.mainColor};
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
    background-color: ${props => props.theme.mainColor};
    border-radius: 50px;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: ${props => props.theme.thirdColor};
    border: 3px solid ${props => props.theme.mainColor};
  }

  &:hover:before {
    top: -35%;
    background-color: ${props => props.theme.mainColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: ${props => props.theme.mainColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`



export const HeroImage = styled.div`
  flex: 1;
  padding: 0 20px;
  display: flex;
  justify-content: end;
  
  @media (max-width: 768px) {
    justify-content: center;
    align-items: flex-start;
  }
  
  @media (max-width: 424px) {
    align-items: flex-start;
    flex: 2;
  }

`
export const Photo = styled.img`
  width: 100%;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
    object-fit: contain;
  }

  @media (max-width: 424px) {
    width: 100%;
    object-fit: contain;
  }


  &:hover{
    scale: 1.01;
  } 
`


export const SocialMedia = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  background-color: ${props => props.theme.thirdColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 30px;
  align-items: end;
  padding: 20px 10px 20px 20px;
`

export const List = styled.div`
  list-style: none;
  display: flex;
  gap: 30px;
  flex-direction: column;


  @media (max-width: 768px) {

  }
`

export const ListItem = styled.div`
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover{
    scale: 1.2;
  }

`

export const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${props => props.theme.mainColor} !important;
`

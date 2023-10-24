import { styled } from 'styled-components';


export const Section = styled.div`

`

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  /* width: 1400px; */
  padding: 0px 80px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;

`

export const LeftSide = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin-top: 100px;
  padding-left: 50px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;

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
  }
`

export const Name = styled.p`
  font-size: 60px;
  margin-bottom: -20px;
  color: ${props => props.theme.fourthColor};
  position: relative;

  &::before {
  content: "";
  position: absolute;
  background-color: ${props => props.theme.mainColor};
  width: 8px;
  height: 70px;
  margin-top: 30px;
  margin-left: -20px;
  }
`

export const Titles = styled.p`
  font-size: 20px;
  letter-spacing: 0.8px;
  color: ${props => props.theme.thirdColor};



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

export const RightSide = styled.div`
  position: relative;
  flex: 3;
  padding-bottom: 20px;
  

`

export const Photo = styled.img`
  height: 420px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`
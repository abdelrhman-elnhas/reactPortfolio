import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('./images/mini.png');
  width: 102%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  margin-bottom: 50px;

`

export const Title = styled.p`
  font-size: 40px;
  color: ${props => props.theme.thirdColor};
  margin-bottom: -5px;
`

export const Desc = styled.p`
  font-size: 30px;
  color: ${props => props.theme.thirdColor};
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Button = styled.button`
  transition: all 0.2s ease-in;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: ${props => props.theme.mainColor};
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 10px;
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
    border: 3px solid ${props => props.theme.thirdColor};
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
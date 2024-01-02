import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 40px;
  right: 15px;
`



export const BtnTxt = styled.p`
  color: ${props => props.theme.mainColor};
  font-family: Bebas Neue;
  font-size: 14px;
  letter-spacing: 1.2px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: none;
  white-space: nowrap;
  transition: all 0.6s ease;

`
export const ScrollTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
  border: none;
  margin: auto;
  outline: none;
  text-align: center;
  background-color: ${props => props.theme.thirdColor};
  transition: height 0.3s ease;
  
  &:hover{
    height: 120px;
  }

  &:hover ${BtnTxt} {
    display: block;
  }

  @media (max-width: 450px) {
    &:hover{
      height: 40px;
    }

    &:hover ${BtnTxt} {
      display: none;
    }
  }
`
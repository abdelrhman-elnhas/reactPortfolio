import { styled } from "styled-components";


export const Section = styled.div`
  display: flex;
  justify-content: center;
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
  margin: 80px 0;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Title = styled.p`
  font-size: 50px;
  color: ${props => props.theme.thirdColor};
  margin-bottom: -20px;
  @media (max-width: 414px) {
    margin-bottom: -10px;
  }

`
export const Desc = styled.p`
  font-size: 15px;
  color: ${props => props.theme.thirdColor};
  @media (max-width: 414px) {
    font-size: 11px;
    margin-bottom: 10px;
  }
`

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

export const Input = styled.input`
  padding: 15px;
  background-color: ${props => props.theme.thirdColor};
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${props => props.theme.mainColor};

  &:focus{
    outline:none !important ;
  }

  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  }
`

export const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  letter-spacing: 1px;
  background-color: ${props => props.theme.thirdColor};
  font-family: inherit;
  resize: none;
  &:focus{
    outline:none !important ;
  }
`

export const Button = styled.button`
  transition: all 0.2s ease-in;
  font-family: inherit;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: inherit;
  color: ${props => props.theme.thirdColor};
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 5px;
  background: transparent;
  border: 3px solid ${props => props.theme.thirdColor};
  align-self: center;
  
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
    border-radius: 5px;
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
    border-radius: 5px;
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
export const Notification = styled.p`
  font-size: 15px;
  color: ${props => props.theme.thirdColor};
  padding: 10px;
  text-align: center;

`
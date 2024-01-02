import { styled , keyframes } from "styled-components";


export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: flex-start;
  
`

export const Label = styled.label`
  font-size: 17px;
  color: ${props => props.theme.thirdColor};
  margin-bottom: 12px;
  display: block;
`

export const Bar = styled.div`
  display: flex;
  align-items: center;
  margin-top: -35px;
  height: 10px;
  padding: 4px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  background-color: ${props => props.theme.thirdColor};
  margin-bottom: 7px;
  `


var fill = keyframes`
    0% {
      opacity: 0.2;
      width: 0; }
    100% { opacity: 1;  }
`;

export const ProgBar = styled.div`
  content: "";
  align-self: flex-start;
  background-color: ${props => props.theme.mainColor};
  height: 100%;
  margin-right: 5px;
  width: 90%;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  animation: ${fill} 3s linear both;
`

export const Value = styled.p`
  color: ${props => props.theme.mainColor};
  font-size: 1rem;
`


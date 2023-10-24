import { styled } from "styled-components";


export const Card = styled.div`
  transition: 0.5s all;
  overflow: hidden;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  transition: all 0.3s ease-in-out;
  background-color: ${props => props.theme.thirdColor};
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  border-radius: 15px;
  width: 30%;
  margin: 10px 0px;


  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    width: 40%;
  }

  &:hover{
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(-10px);
  }
`

export const Thumb = styled.div`
  position: relative;
  overflow: hidden;
`

export const Tag = styled.span`
  background: ${props => props.theme.mainColor};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: ${props => props.theme.thirdColor};
  font-size: 14px;
  padding: 2px 8px;
  position: absolute;
  left: 20px;
  top: 0;
  z-index: 1;
`

export const ProjectImage = styled.img`
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 100%;
`


export const Title = styled.p`
  color: ${props => props.theme.mainColor};
  padding: 0 0 0 20px;
  font-size: 18px;
  margin-bottom: -5px;
  
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0 0 0 10px;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 0 0 10px;
  }

  `

export const Date = styled.p`
  font-size: 12px;
  color: ${props => props.theme.mainColor};
  opacity: 0.6;
  padding: 0 0 0 20px;

  &:after{
  content: "";
  background: ${props => props.theme.mainColor};
  border-radius: 50%;
  display: inline-block;
  height: 3px;
  margin-left: 0.6rem;
  vertical-align: middle;
  width: 3px;
  }
  
`
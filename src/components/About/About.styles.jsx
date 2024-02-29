import { styled } from "styled-components";



export const Section = styled.div`
  display: flex;
  justify-content: center;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  margin-top: 20px;

`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 80px 0;
  padding: 0px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

export const AboutBars = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 30px;
  width: 100%;
`

export const Title = styled.div`
  color: ${props => props.theme.thirdColor};
  font-size: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`
export const Name = styled.div`
  color: ${props => props.theme.thirdColor};
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
  }
`


export const Desc = styled.div`
  color: ${props => props.theme.fourthColor};
  font-size: 30px;

  @media (max-width: 996px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 30px;
  }
`


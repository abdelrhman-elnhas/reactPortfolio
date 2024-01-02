import { styled } from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  margin: 40px 0px;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  display: flex;
  padding: 40px 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Title = styled.p`
  font-size: 40px;
  color: ${props => props.theme.thirdColor};
  margin-bottom: -30px;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: -20px;
  }
  `

export const Desc = styled.p`
  font-size: 40px;
  color: ${props => props.theme.thirdColor};

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

export const CardSection = styled.div`
  width: 100%;
  /* padding: 10px 10px 10px 0; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: flex-start; */
  }
`

import {styled} from 'styled-components';

export const Container = styled.div`
  width: 33.3%;
  padding: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Card = styled.div`
  background-color: ${props => props.theme.thirdColor};
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  padding: 40px;
  aspect-ratio: 1/1;

  @media (max-width: 768px) {
    aspect-ratio: unset;
  }

  &:hover{
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }
`

export const Row =styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const LogoBlock = styled.div`
  background-color: ${props => props.theme.mainColor};
  width: 80px;
  height: 80px;
  border-radius: 20px 20px 0 20px;
  -webkit-border-radius: 20px 20px 0 20px;
  -moz-border-radius: 20px 20px 0 20px;
  -ms-border-radius: 20px 20px 0 20px;
  -o-border-radius: 20px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 955px) {
    width: 70px;
    height: 70px;
  }
  
  @media (max-width: 889px) {
    width: 60px;
    height: 60px;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

`

export const Logo = styled.img`
  width: 60px;
  margin: 15px;

  @media (max-width: 955px) {
    width: 50px;
    margin: 35px;
  }

  @media (max-width: 889px) {
    width: 45px;
    margin: 35px;
  }

  @media (max-width: 768px) {
    width: 60px;
    margin: 15px;
  }
`

export const Title = styled.pre`
  font-size: 2.1rem;
  font-family: Bebas Neue;
  color: ${props => props.theme.mainColor};
  letter-spacing: 0.8px;
  line-height: 35px;
  white-space: pre-line;

  @media (max-width: 1110px) {
    font-size: 1.7rem;
    letter-spacing: 0.3px;
  }

  @media (max-width: 1011px) {
    font-size: 1.4rem;
  }

  @media (max-width: 920px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  `

export const Content = styled.p`
  font-size: 1rem;
  display: flex;
  align-items: flex-end;
  white-space: pre-line;

  @media (max-width: 889px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  `
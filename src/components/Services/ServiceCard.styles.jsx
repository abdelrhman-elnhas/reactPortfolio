import {styled} from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.thirdColor};
  aspect-ratio: 1/1;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  padding: 35px;

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
  gap: 20px;
  align-items: center;
`

export const LogoBlock = styled.div`
  background-color: ${props => props.theme.mainColor};
  width: 80px !important;
  aspect-ratio: 1;
  padding: 15px;
  width: 50%;
  border-radius: 20px 20px 0 20px;
  -webkit-border-radius: 20px 20px 0 20px;
  -moz-border-radius: 20px 20px 0 20px;
  -ms-border-radius: 20px 20px 0 20px;
  -o-border-radius: 20px 20px 0 20px;
`

export const Logo = styled.img`
  width: 100%;
`

export const Title = styled.p`
  font-size: 2.1rem;
  color: ${props => props.theme.mainColor};
  letter-spacing: 0.5px;
  line-height: 35px;
  white-space: pre-line;
`

export const Content = styled.p`
  font-size: 1.25rem;
`
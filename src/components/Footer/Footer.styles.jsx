import { styled } from "styled-components";


export const Section = styled.div`
  display: flex;
  justify-content: center;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  background-color: ${props => props.theme.thirdColor};
  border-top: solid 7px #701818;
  position: static;
  bottom: 0;
  left: 0;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Text = styled.p`
  color: ${props => props.theme.secColor};
  font-size: 24px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
}
  @media (max-width: 365px) {
    font-size: 14px;
    /* margin-bottom: 2px; */
}


`

export const Name = styled.span`
  color: ${props => props.theme.mainColor};
  font-size: 24px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 365px) {
    font-size: 14px;
  }
  `

export const Copyright = styled.p`
  margin-top: -15px;
  font-size: 16px;
  color: ${props => props.theme.secColor};
  letter-spacing: 1px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
  `

export const Logo = styled.img`
  max-width: 30px;
  vertical-align: middle;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 20px;
  }
  @media (max-width: 320px) {
    max-width: 15px;
  }
  `


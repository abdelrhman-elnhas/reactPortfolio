import { styled } from "styled-components";


export const Section = styled.div`
  scroll-snap-align: center;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  position: static;
  bottom: 0;
  left: 0;
`

export const Container = styled.div`
  width: 100vw;
  display: flex;
  /* padding: 10px 70px 10px 70px; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.thirdColor};
  border-top: solid 7px #701818;
`

export const Text = styled.p`
  color: ${props => props.theme.secColor};
  font-size: 24px;
`

export const Name = styled.span`
  color: ${props => props.theme.mainColor};
  font-size: 24px;
`

export const Copyright = styled.p`
  margin-top: -15px;
  font-size: 16px;
  color: ${props => props.theme.secColor};
  letter-spacing: 1px;
`

export const Logo = styled.img`
  max-width: 30px;
  vertical-align: middle;
`

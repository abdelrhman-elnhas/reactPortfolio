import { styled } from "styled-components";



export const Section = styled.div`
  height: 100vh;
  margin-bottom: 50px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`

export const Container = styled.div`
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-self: flex-start;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 0px 30px;
`

export const Title = styled.div`
  color: ${props => props.theme.thirdColor};
  font-size: 40px;
  margin-bottom: 20px;
`

export const Desc = styled.div`
  color: ${props => props.theme.fourthColor};
  font-size: 30px;
`

export const Name = styled.div`
  color: ${props => props.theme.thirdColor};
  font-size: 30px;
`
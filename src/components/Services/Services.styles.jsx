import { styled } from 'styled-components';

export const Section = styled.div`
  height: 100vh;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  padding: 0px 70px;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.p`
  font-size: 40px;
  padding: 0px 70px;
  color: ${props => props.theme.thirdColor};
  margin-bottom: -30px;
`

export const Desc = styled.p`
  font-size: 40px;
  padding: 0px 70px;
  color: ${props => props.theme.thirdColor};
`

export const CardSection = styled.div`
  display: flex;
  align-self: center;
  width: 90%;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
`

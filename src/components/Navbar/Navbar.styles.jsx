import { styled } from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.thirdColor};
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`

export const Container = styled.div`
  padding: 10px 0px;
`

export const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;

`

export const Logo = styled.img`
  cursor: pointer;
  height: 40px;

  @media only screen and (max-width: 768px) {
    
  }
`

export const Link = styled.li`
  cursor: pointer;
  position: relative;

  &::before {
    position: absolute;
    left: -9px;
    content: "<";
    visibility: hidden;
  }

  &::after {
    position: absolute;
    content: ">";
    visibility: hidden;
  }

  &:hover::after {
    visibility: visible;
  }

  &:hover::before {
    visibility: visible;
  }

  &:active::after {
    visibility: visible;
  }

  &:active::before {
    visibility: visible;
  }

    @media only screen and (max-width: 768px) {
    display: none;
  }

`
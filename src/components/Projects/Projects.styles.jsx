import { styled } from "styled-components";

export const Section = styled.div`
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  padding: 0px 40px;
  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  height: fit-content;
  scroll-snap-align: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 91%;
  margin-left: -20px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 30px;
    width: 83%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: -20px;
    width: 85%;
  }
`;

export const FilterButton = styled.button`
  transition: all 0.2s ease-in;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: ${(props) => props.theme.thirdColor};
  padding: 0.5em 0.8em;
  font-size: 14px;
  border-radius: 10px;
  background: transparent;
  border: 3px solid ${(props) => props.theme.thirdColor};
  margin-left: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  &:active {
    color: ${(props) => props.theme.thirdColor};
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${(props) => props.theme.thirdColor};
    border-radius: 10px;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.mainColor};
    border: 3px solid ${(props) => props.theme.thirdColor};
  }

  &:hover:before {
    top: -35%;
    background-color: ${(props) => props.theme.thirdColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: ${(props) => props.theme.thirdColor};
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;
export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 95px);
  gap: 15px;
  padding: 30px 0px;
  margin-top: 20px;
`;

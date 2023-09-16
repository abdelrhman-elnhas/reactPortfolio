import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #313131;
  background-image: url("./images/graphic.png");
  background-position: 0% 0%;
  animation: gradient 10s ease infinite;
  -webkit-animation: gradient 80s ease infinite;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }

    50% {
      background-position: 10% 20%;
    }

    100% {
      background-position: 0% 0%;
    }
  }
`;

export const AEtheme = {
  mainColor: "#701818",
  secColor: "#313131",
  thirdColor: "#F6E7D8",
  fourthColor: "#FEF9A7",
};
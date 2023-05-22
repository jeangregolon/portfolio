import styled, { keyframes } from "styled-components";
import { darkBlue, orange, white, yellow } from "../../cssConstants";

const typing = keyframes`
from {
    width: 0;
  }
  to {
    width: 100%;
  }`;

const changeWord = keyframes`
 0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-300%);
  }
`;

export const Container = styled.div`
  background-color: ${darkBlue};
  height: 100%;
  padding: 20px 60px;

  @media (max-width: 719px) {
    padding: 20px;
  }
`;

export const Oportunities = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${white};
  position: relative;
  height: 400px;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 719px) {
    height: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 56px;
  line-height: 100%;
  max-width: 650px;
  font-weight: 900;
  margin-left: 50px;

  @media (max-width: 719px) {
    margin-left: 0;
    font-size: 50px;
  }
`;

export const TypingEffect = styled.span`
  display: inline-block;
  text-align: left;
`;

export const WordsWrapper = styled.span`
  display: grid;
  overflow: hidden;
  height: 1em;
  margin: 0;
`;

export const Word = styled.span`
  color: ${yellow};
  max-width: max-content;
  overflow: hidden;
  height: inherit;
  word-break: break-all;
  -webkit-animation: ${typing} 2s linear infinite alternate,
    ${changeWord} 12s steps(3) infinite;
  animation: ${typing} 2s linear infinite alternate,
    ${changeWord} 12s steps(3) infinite;
`;

export const MainAsset = styled.div`
  background-image: url("/assets/asset-man.png");
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 420px;
  position: absolute;
  z-index: 9;
  bottom: -20px;
  right: 50px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 150px;
  margin: 40px 0 0 50px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  height: 36px;
  cursor: pointer;
  position: relative;
  background-color: ${orange};
  color: ${darkBlue};

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    left: 0%;
    width: 100%;
    border-top: 4px solid ${white};
    border-left: 8px solid rgba(0, 0, 0, 0);
    border-right: 8px solid rgba(0, 0, 0, 0);
    height: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  @media (max-width: 719px) {
    margin: 40px 0 0 0;
  }
`;

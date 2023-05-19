import styled, { keyframes } from "styled-components";

interface IconProps {
  asset: string;
}

interface SlideProps {
  slideDirection: string;
}

const slide = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(-100%);
}`;

const reverse = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}`;

export const Container = styled.div`
  padding: 60px;
  overflow-x: hidden;
  max-width: 1366px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 40px;
  line-height: 100%;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 12px 0 24px;
  max-width: 50%;
`;

export const CardsWrapper = styled.div<SlideProps>`
  display: inline-block;
  animation: 60s
    ${(props) => (props.slideDirection === "reverse" ? reverse : slide)}
    infinite linear;
`;

export const CardRow = styled.div`
  white-space: nowrap;
  position: relative;

  &:hover ${CardsWrapper} {
    animation-play-state: paused;
  }

  &:before {
    position: absolute;
    top: 0;
    left: -100px;
    height: 100%;
    width: 10%;
    z-index: 99;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), white, white);
    content: "";
  }

  &:after {
    position: absolute;
    top: 0;
    right: -100px;
    height: 100%;
    width: 10%;
    z-index: 99;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), white, white);
    content: "";
  }
`;

export const Card = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  padding: 6px;
  margin: 12px 6px;
  box-shadow: 0px 4px 12px rgba(33, 36, 41, 0.14);
`;

export const Icon = styled.div<IconProps>`
  background: url("${(props) => props.asset}") transparent no-repeat;
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
`;

export const Name = styled.p`
  margin-left: 12px;
`;

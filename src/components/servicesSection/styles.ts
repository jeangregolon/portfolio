import styled from "styled-components";
import { white } from "../../cssConstants";

export const Container = styled.div`
  background: url("/assets/tech-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 80px 60px;
  max-width: 1366px;
  background: rgba(0, 0, 0, 0.5);
  color: ${white};

  @media (max-width: 719px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 54px;
  margin: 0 0 40px 50%;

  @media (max-width: 1023px) {
    margin: 0 0 40px 0;
  }
`;

export const List = styled.ul`
  width: 50%;
  margin-left: 50%;

  @media (max-width: 1023px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
  font-size: 22px;

  &:before {
    content: "";
    display: inline-block;
    height: 16px;
    width: 16px;
    background-image: url("/assets/check.png");
    background-size: contain;
    margin-right: 12px;
  }
`;

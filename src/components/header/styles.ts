import styled from "styled-components";
import { darkBlue, mediumBlue, white } from "../../cssConstants";

export const Container = styled.div`
  background-color: ${white};
  height: 70px;
  border-radius: 6px;
  box-shadow: 0 1px 32px rgba(0, 0, 0, 0.15);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 719px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  @media (max-width: 719px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  margin-left: 20px;
  cursor: pointer;
  color: ${darkBlue};

  &:hover {
    color: ${mediumBlue};
  }
`;

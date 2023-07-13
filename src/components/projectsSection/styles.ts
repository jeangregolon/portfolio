import styled from "styled-components";
import { lightBlue, orange, white, yellow } from "../../cssConstants";

export const Section = styled.div`
  background: linear-gradient(
    0deg,
    ${white} 15%,
    ${lightBlue} 0,
    ${lightBlue} 70%,
    ${white} 15%
  );
  padding: 40px;
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const SliderButton = styled.button`
  background: none;
  color: white;
  font-weight: 900;
  font-size: 2rem;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  border: 1px solid rgba(204, 204, 204, 0.5);
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${white};
  transition: transform 0.3s ease;

  position: relative;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 40px;
  line-height: 100%;
`;

export const Image = styled.img`
  width: 240px;
  height: 135px;
  margin-bottom: 20px;
  border: 1px solid rgba(204, 204, 204, 0.5);
`;

export const CardButton = styled.a`
  text-decoration: none;
  text-align: center;
  background: ${orange};
  color: ${white};
  border: 1px solid rgba(204, 204, 204, 0.5);
  padding: 5px 15px;
  border-radius: 1px;
  margin: auto auto 0px auto;

  &:hover {
    background: ${yellow};
  }
`;

export const CardTitle = styled.h2`
  margin-bottom: 16px;
  font-weight: 800;
`;

export const CardDescription = styled.p`
  text-align: center;
`;

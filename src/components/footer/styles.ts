import styled from "styled-components";
import {
  darkBlue,
  gray,
  lightBlue,
  mediumBlue,
  white,
} from "../../cssConstants";

export const Container = styled.div`
  padding: 60px;
  background: ${darkBlue};
  color: ${white};

  @media (max-width: 719px) {
    padding: 20px;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 54px;

  @media (max-width: 1023px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const LeftColumn = styled.div`
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 719px) {
    width: 100%;
  }
`;

export const Divider = styled.div`
  width: 1px;
  background-color: ${lightBlue};

  @media (max-width: 1023px) {
    width: 90%;
    height: 1px;
    margin: 30px 0;
  }
`;

export const RightColumn = styled.div`
  width: 50%;

  @media (max-width: 719px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${gray};
  border-radius: 4px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${gray};
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: ${mediumBlue};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${lightBlue};
  }
`;

export const SocialWrapper = styled.div`
  max-width: 270px;

  @media (max-width: 719px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SocialLink = styled.a``;

export const SocialIcon = styled.img`
  width: 70px;
  height: 70px;
  margin: 7px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Text = styled.p`
  text-align: center;
  margin: 5px 0;
`;

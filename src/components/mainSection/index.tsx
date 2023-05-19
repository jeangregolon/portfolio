import { Header } from "../header";
import {
  Button,
  Container,
  MainAsset,
  Oportunities,
  Title,
  TypingEffect,
  Word,
  WordsWrapper,
} from "./styles";

export const MainSection = () => {
  const handleClick = () => {
    const elementDiv = document.getElementById("contato");
    if (elementDiv) {
      window.scrollTo({
        top: elementDiv.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Header />
      <Oportunities>
        <Title>
          Gere mais {""}
          <TypingEffect>
            <WordsWrapper>
              <Word>vendas</Word>
              <Word>oportunidades</Word>
              <Word>clientes</Word>
            </WordsWrapper>
          </TypingEffect>
          <br />
          para seu negócio
        </Title>
        <Button onClick={() => handleClick()}>Contato</Button>
        <MainAsset />
      </Oportunities>
    </Container>
  );
};

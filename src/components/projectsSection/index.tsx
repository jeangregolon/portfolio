import {
  Card,
  CardButton,
  CardDescription,
  CardTitle,
  Image,
  Section,
  Slider,
  SliderButton,
  Title,
} from "./styles";
import { useState } from "react";

const cards = [
  {
    image: "/assets/de-rose.png",
    title: "De Rose Cosméticos",
    description:
      "E-commerce na área de cosméticos desenvolvido com WordPress e WooCommerce",
    buttonLink: "https://derosecosmeticos.com.br",
  },
  {
    image: "/assets/rd-station.png",
    title: "RD Station",
    description:
      "Desafio técnico para uma vaga como desenvolvedor na RD Station. Landing page desenvolvida apenas com HTML, CSS e JavaScript",
    buttonLink: "http://mkt.gregolontech.com.br",
  },
  {
    image: "/assets/blog.png",
    title: "Blog de Tecnologia",
    description:
      "Blog desenvolvido com WordPress que aborda tecnologias e linguagens de programação",
    buttonLink: "http://blog.gregolontech.com.br",
  },
  {
    image: "/assets/pokedex.png",
    title: "Pokédex",
    description: "Catálogo de Pokémons construído com VueJs",
    buttonLink: "http://pokedex.gregolontech.com.br/pesquisa",
  },
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextCards = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const showPreviousCards = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Math.max(0, cards.length - 1) : prevIndex - 1
    );
  };

  const getCurrentCardIndices = (): number[] => {
    const indices: number[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cards.length;
      indices.push(index);
    }
    return indices;
  };

  const renderCards = (): JSX.Element[] => {
    const currentCardIndices = getCurrentCardIndices();
    let numVisibleCards = 1;

    if (window.innerWidth >= 1024 && window.innerWidth < 1366) {
      numVisibleCards = 2;
    } else if (window.innerWidth >= 1366) {
      numVisibleCards = 3;
    }
    return currentCardIndices.slice(0, numVisibleCards).map((index) => {
      const card = cards[index];
      return (
        <Card key={index}>
          <Image src={card.image} alt="Card " />
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
          <CardButton href={card.buttonLink} target="_blank">
            VER MAIS
          </CardButton>
        </Card>
      );
    });
  };

  return (
    <Section id="projetos">
      <Title>Projetos</Title>
      <Slider>
        <SliderButton className="previous" onClick={showPreviousCards}>
          &lt;
        </SliderButton>
        {renderCards()}
        <SliderButton onClick={showNextCards}>&gt;</SliderButton>
      </Slider>
    </Section>
  );
};

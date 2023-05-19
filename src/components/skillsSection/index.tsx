import {
  Card,
  CardRow,
  CardsWrapper,
  Container,
  Icon,
  Name,
  Subtitle,
  Title,
} from "./styles";

const rows = [1, 2, 3];

const skills = [
  {
    logo: "js",
    name: "JavaScript",
  },
  {
    logo: "typescript",
    name: "TypeScript",
  },
  {
    logo: "html-5",
    name: "HTML",
  },
  {
    logo: "css-3",
    name: "CSS",
  },
  {
    logo: "react",
    name: "React",
  },
  {
    logo: "node-js",
    name: "Node",
  },
  {
    logo: "php",
    name: "PHP",
  },
  {
    logo: "mongo-db",
    name: "MongoDB",
  },
  {
    logo: "mysql",
    name: "MySQL",
  },
  {
    logo: "sql-server",
    name: "MSSQL",
  },
  {
    logo: "vue",
    name: "Vue",
  },
  {
    logo: "angular",
    name: "Angular",
  },
  {
    logo: "jquery",
    name: "jQuery",
  },
  {
    logo: "nginx",
    name: "Nginx",
  },
  {
    logo: "aws",
    name: "AWS",
  },
  {
    logo: "ubuntu",
    name: "Ubuntu",
  },
  {
    logo: "git",
    name: "Git",
  },
  {
    logo: "wordpress",
    name: "WordPress",
  },
];

export const SkillsSection = () => {
  return (
    <Container id="tecnologias">
      <Title>Tecnologias</Title>
      <Subtitle>
        Trabalhamos com uma ampla variedade de tecnologias e linguagens de
        programação, oferecendo soluções customizadas para cada cliente. Entre
        as principais utilizadas, destacam-se
      </Subtitle>
      {rows.map((row) => {
        let shuffledSkills = skills.sort(() => Math.random() - 0.5);
        return (
          <CardRow>
            <CardsWrapper slideDirection={row % 2 === 0 ? "slide" : "reverse"}>
              {shuffledSkills.map((skill) => (
                <Card>
                  <Icon asset={`/assets/${skill.logo}.png`} />
                  <Name>{skill.name}</Name>
                </Card>
              ))}
            </CardsWrapper>
            <CardsWrapper slideDirection={row % 2 === 0 ? "slide" : "reverse"}>
              {shuffledSkills.map((skill) => (
                <Card>
                  <Icon asset={`/assets/${skill.logo}.png`} />
                  <Name>{skill.name}</Name>
                </Card>
              ))}
            </CardsWrapper>
          </CardRow>
        );
      })}
    </Container>
  );
};

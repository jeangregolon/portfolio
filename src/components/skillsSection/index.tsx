import {
  Card,
  CardRow,
  CardsWrapper,
  Container,
  Icon,
  Link,
  Name,
  Subtitle,
  Title,
} from "./styles";

const rows = [1, 2, 3];

const skills = [
  {
    logo: "js",
    name: "JavaScript",
    link: "http://blog.gregolontech.com.br/2023/05/23/javascript-a-linguagem-de-programacao-para-o-mundo-da-web/",
  },
  {
    logo: "typescript",
    name: "TypeScript",
    link: "http://blog.gregolontech.com.br/2023/05/23/typescript-uma-extensao-do-javascript-para-desenvolvimento-robusto-e-escalavel/",
  },
  {
    logo: "html-5",
    name: "HTML",
    link: "http://blog.gregolontech.com.br/2023/05/25/html-a-linguagem-de-marcacao-essencial-para-a-web/",
  },
  {
    logo: "css-3",
    name: "CSS",
    link: "http://blog.gregolontech.com.br/2023/05/25/css-transformando-paginas-web-com-estilo-e-design/",
  },
  {
    logo: "react",
    name: "React",
    link: "http://blog.gregolontech.com.br/2023/05/22/react-js-desenvolvendo-interfaces-interativas-e-reativas/",
  },
  {
    logo: "node-js",
    name: "Node",
    link: "http://blog.gregolontech.com.br/2023/05/22/node-js-desenvolvimento-de-aplicacoes-eficientes-e-escalaveis/",
  },
  {
    logo: "php",
    name: "PHP",
    link: "http://blog.gregolontech.com.br/2023/05/23/php-a-linguagem-de-programacao-para-o-desenvolvimento-web/",
  },
  {
    logo: "mongo-db",
    name: "MongoDB",
    link: "http://blog.gregolontech.com.br/2023/05/25/mongodb-o-poder-do-banco-de-dados-nosql/",
  },
  {
    logo: "mysql",
    name: "MySQL",
    link: "http://blog.gregolontech.com.br/2023/05/25/mysql-o-banco-de-dados-relacional-confiavel-e-poderoso/",
  },
  {
    logo: "sql-server",
    name: "MSSQL",
    link: "http://blog.gregolontech.com.br/2023/05/25/microsoft-sql-server-uma-solucao-robusta-para-gerenciamento-de-dados-empresariais/",
  },
  {
    logo: "vue",
    name: "Vue",
    link: "http://blog.gregolontech.com.br/2023/05/22/vue-js-construindo-aplicacoes-web-interativas-e-reativas/",
  },
  {
    logo: "angular",
    name: "Angular",
    link: "http://blog.gregolontech.com.br/2023/05/25/angular-construindo-aplicacoes-web-modernas-e-interativas/",
  },
  {
    logo: "jquery",
    name: "jQuery",
    link: "http://blog.gregolontech.com.br/2023/05/25/jquery-simplificando-a-manipulacao-e-interacao-com-o-javascript/",
  },
  {
    logo: "nginx",
    name: "Nginx",
    link: "http://blog.gregolontech.com.br/2023/05/23/nginx-o-servidor-web-de-alto-desempenho/",
  },
  {
    logo: "aws",
    name: "AWS",
    link: "http://blog.gregolontech.com.br/2023/05/25/aws-amazon-web-services-uma-visao-geral-da-plataforma-de-computacao-em-nuvem-lider/",
  },
  {
    logo: "ubuntu",
    name: "Ubuntu",
    link: "http://blog.gregolontech.com.br/2023/05/23/ubuntu-o-sistema-operacional-de-codigo-aberto-para-todos/",
  },
  {
    logo: "git",
    name: "Git",
    link: "http://blog.gregolontech.com.br/2023/05/23/git-controle-de-versao-distribuido-para-desenvolvimento-colaborativo/",
  },
  {
    logo: "wordpress",
    name: "WordPress",
    link: "http://blog.gregolontech.com.br/2023/05/22/conheca-as-principais-caracteristicas-do-wordpress-e-a-potencia-do-woocommerce/",
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
                <Link href={skill.link} target="_blank">
                  <Card>
                    <Icon asset={`/assets/${skill.logo}.png`} />
                    <Name>{skill.name}</Name>
                  </Card>
                </Link>
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

import { Container, List, ListItem, Title, Wrapper } from "./styles";

export const ServicesSection = () => {
  return (
    <Container id="serviços">
      <Wrapper>
        <Title>Serviços Oferecidos</Title>
        <List>
          <ListItem>
            Desenvolvimento de lojas virtuais e-commerce personalizadas, com
            design responsivo e integração de meios de pagamento.
          </ListItem>
          <ListItem>
            Criação de APIs para integração de sistemas e serviços, permitindo a
            comunicação entre diferentes plataformas.
          </ListItem>
          <ListItem>
            Desenvolvimento de landing pages para promoções, lançamentos de
            produtos ou captação de leads, com foco em conversão e otimização de
            resultados.
          </ListItem>
          <ListItem>
            Criação de sistemas personalizados para gerenciamento de processos
            internos de empresas, como controle de estoque, vendas e finanças.
          </ListItem>
          <ListItem>
            Desenvolvimento de blogs corporativos e pessoais, com layout
            customizado e integração de plataformas de publicação de conteúdo.
          </ListItem>
          <ListItem>
            Criação de aplicativos web responsivos, com tecnologias como React e
            Angular, que permitem o acesso a sistemas e serviços através de
            diferentes dispositivos.
          </ListItem>
        </List>
      </Wrapper>
    </Container>
  );
};

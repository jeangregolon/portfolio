import { useState } from "react";
import {
  ColumnWrapper,
  Container,
  Divider,
  LeftColumn,
  RightColumn,
  Form,
  Label,
  Input,
  TextArea,
  Button,
  SocialLink,
  SocialIcon,
  SocialWrapper,
  Title,
  Text,
} from "./styles";

const socialIcons = [
  {
    src: "e-mail",
    alt: "E-mail",
    href: "mailto:contato@gregolontech.com.br",
  },
  {
    src: "github",
    alt: "GitHub",
    href: "https://www.github.com/jeangregolon/",
  },
  {
    src: "linkedin",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/jeangregolon/",
  },
  {
    src: "whatsapp",
    alt: "WhatsApp",
    href: "https://wa.me/5554996169918",
  },

  {
    src: "instagram",
    alt: "Instagram",
    href: "https://www.instagram.com/gregolontech/",
  },
  {
    src: "facebook",
    alt: "Facebook",
    href: "https://www.facebook.com/gregolontech",
  },
];

export const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const mailto = "mailto:contato@gregolontech.com.br";
    const body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0AMensagem: ${message}`;
    window.location.href = `${mailto}?subject=Contato&body=${body}`;
  };

  return (
    <Container id="contato">
      <Title>Contato</Title>
      <ColumnWrapper>
        <LeftColumn>
          <SocialWrapper>
            {socialIcons.map((icon) => {
              return (
                <SocialLink href={icon.href} target="_blank">
                  <SocialIcon alt={icon.alt} src={`/assets/${icon.src}.png`} />
                </SocialLink>
              );
            })}
          </SocialWrapper>
        </LeftColumn>
        <Divider />
        <RightColumn>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Nome:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Label htmlFor="email">E-mail:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Label htmlFor="message">Mensagem:</Label>
            <TextArea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />

            <Button type="submit">Enviar</Button>
          </Form>
        </RightColumn>
      </ColumnWrapper>
      <Text>© 2023 Gregolon Tech - Todos os direitos reservados.</Text>
      <Text>CNPJ: 43.510.182/0001-53</Text>
    </Container>
  );
};

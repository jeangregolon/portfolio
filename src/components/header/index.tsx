import { Container, Logo, Menu, MenuItem } from "./styles";

export const Header = () => {
  const handleMenuItemClick = (elementId: string) => {
    const elementDiv = document.getElementById(elementId);
    if (elementDiv) {
      window.scrollTo({
        top: elementDiv.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <Container>
        <a href="/">
          <Logo src="/assets/logo-h.png" alt="Logo" />
        </a>
        <Menu>
          <MenuItem onClick={() => handleMenuItemClick("tecnologias")}>
            Tecnologias
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("serviços")}>
            Serviços
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("projetos")}>
            Projetos
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("contato")}>
            Contato
          </MenuItem>
        </Menu>
      </Container>
    </header>
  );
};

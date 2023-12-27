import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Outline,
  Span,
  LogoText,
  TaglineText
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {

    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      const header = document.getElementById("header");

      if (element && header) {
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY - header.offsetHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setVisibility(false);
    };


    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About us")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("privacy")}>
          <Span>{t("Privacy")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("Register")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection id="header">
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Row>
               <img src={require("./logo.png")} alt="Goosto.me Logo" />
               <LogoText>GOOSTO</LogoText>
            </Row>
            <Row>
               <TaglineText>Tasteocracy - Democratizing Gastronomy</TaglineText>
            </Row>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);

import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <img src={src} alt={src} width="40px" height="40px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-around"
            align="middle"
            style={{ paddingTop: "1rem" }}
          >
            <FooterContainer>
              <SocialLink
                href="https://www.linkedin.com/in/yohaiazriel/"
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png"
              />
              <SocialLink
                href="https://www.linkedin.com/in/yohaiazriel/"
                src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-512.png"
              />
              <SocialLink
                href="https://www.linkedin.com/in/yohaiazriel/"
                src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png"
              />
              <SocialLink
                 href="https://www.linkedin.com/in/yohaiazriel/"
                 src="https://static-00.iconduck.com/assets.00/social-instagram-icon-2048x2048-xuel0xhc.png"
              />
              <SocialLink
                  href="https://www.linkedin.com/in/yohaiazriel/"
                 src="https://cdn0.iconfinder.com/data/icons/logos-brands-7/512/TikTok_logo_app0-512.png"
              />


            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

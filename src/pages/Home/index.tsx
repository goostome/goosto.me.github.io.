 import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import TeamContent from "../../content/TeamContent.json";
import PrivacyContent from "../../content/PrivacyContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const TeamBlock = lazy(() => import("../../components/TeamBlock"));
const PrivacyBlock = lazy(() => import("../../components/PrivacyBlock"));

const Home = () => {
  return (
    <Container>
      <ContentBlock
        type="left"
        title={IntroContent.title}
        content={IntroContent.text}
        paragraphs={IntroContent.paragraphs}
        icon="https://online.jwu.edu/wp-content/uploads/2023/06/shutterstock_18738304752028129-min-3.jpg"
        id="mission"
      />
      <TeamBlock teamData={TeamContent.teamMembers} id="about"/>
      <PrivacyBlock
        title={PrivacyContent.title}
        paragraphs={PrivacyContent.paragraphs}
        icon="developer.svg"
        id="privacy"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        paragraphs={ContactContent.paragraphs}
        id="contact"
      />
    </Container>
  );
};

export default Home;

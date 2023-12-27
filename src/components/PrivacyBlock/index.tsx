import { Row, Col } from "antd";
import { PrivacyProps } from "./types";
import { Fade } from "react-awesome-reveal";


import {
  RightBlockContainer,
  Content,
  ContentWrapper,
} from "./styles";

const PrivacyBlock = ({
  title,
  paragraphs,
  icon,
  id,
}: PrivacyProps) => {

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row id={id} justify="space-between" align="middle">
          <Col lg={16} md={18} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              {paragraphs &&
                paragraphs.map((item: any, id: number) => (
                  <p key={id}>{item}</p>
                ))}
            </ContentWrapper>
          </Col>
          <Col lg={8} md={6} sm={24} xs={24}>
            <img src="https://www.isaca.org/-/media/images/isacadp/project/isaca/tiles/search/privacy-6.png" width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default PrivacyBlock;

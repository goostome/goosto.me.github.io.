import React from "react";
import { Row, Col } from "antd";
import { TeamBlockWrapper, TeamMember } from "./styles";
import { TeamBlockProps } from "./types";

const TeamBlock = (props: TeamBlockProps) => {
  return (
    <>
      <TeamBlockWrapper>
        <Row id={props.id} justify="center" align="middle">
          {/* Text on the Left */}
          <Col lg={16} md={18} sm={24} xs={24}>
            <div>
              <h2>About Us</h2>
              <p> Welcome to GOOSTO.me...</p>
              <p> Welcome to the culinary epicenter where Founder & CTO Yohai Azriel,
                  a tech visionary with two decades of expertise, leads a revolution.</p>
              <p>
                 We're reshaping dining, transforming gastronomy into a shared adventure.
                 With diverse technological mastery, I bring extensive experience in real-time applications, AI, and high-scale systems.
                 Proficient in leading technologies and cloud computing, I thrive in fostering innovation.</p>
              <p>
                Let's embark on a culinary revolution, transforming how people engage with restaurants.
                Join us at GOOSTO.me, where shared experiences elevate your dining journey.</p>

              <p>
                Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/yohaiazriel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                to explore the intersection of technology and culinary delight.
              </p>
            </div>
          </Col>

          {/* Team Members on the Right */}
          <Col lg={8} md={6} sm={24} xs={24}>
            <Row justify="center" align="middle">
              {props.teamData.map((member, index) => (
                <Col lg={8} md={12} sm={24} xs={24} key={index}>
                  <TeamMember style={{ textAlign: 'center' }}>
                    <a
                      href={`https://www.linkedin.com/in/${member.linkedinId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block' }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            style={{
                              width: "180px",
                              height: "180px",
                              borderRadius: "50%",
                            }}
                            src={require(`./${member.image}`)}
                            alt={member.name}
                         />
                        <h6 style={{ fontSize: "20px", margin: "5px 0" }}>{member.name}</h6>
                        <h6 style={{ fontSize: "18px", margin: "5px 0" }}>{member.title}</h6>
                      </div>
                    </a>
                  </TeamMember>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </TeamBlockWrapper>
    </>
  );
};

export default TeamBlock;

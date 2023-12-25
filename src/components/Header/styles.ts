import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    max-width: 140px;  // Adjust the max-width as needed
    width: 20%;       // Ensures the image takes the full width of the container
    height: auto;      // Maintains the aspect ratio while resizing
  }
`;

export const LogoText = styled("p")`
  margin-top: 5px;
    font-size: 32px;               // Adjust the font size as needed
    font-weight: 800;              // Set the font weight to bold
    color: #000;                   // Set the text color to black
    font-family: 'Playfair Display', serif;  // Use Playfair Display font
    text-transform: uppercase;     // Convert text to uppercase
    letter-spacing: 3px;           // Adjust the letter spacing as needed
    line-height: 1;
`;

export const TaglineText = styled("p")`
  font-size: 14px;   // Adjust the font size as needed
  font-weight: 800;  // Adjust the font weight as needed
  color: #EB8E38;       // Adjust the text color as needed
  font-family: 'Playfair Display', serif;  // Use Playfair Display font
  text-transform: uppercase;     // Convert text to uppercase
  letter-spacing: 3px;           // Adjust the letter spacing as needed
  line-height: 0.5;
`;


export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif; /* Apply the Roboto font */
    font-weight: bold; /* Make the text bold at all times */

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
  }
`;

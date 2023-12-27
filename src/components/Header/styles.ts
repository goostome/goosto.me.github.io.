import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 0.5rem 0.5rem;
  position: fixed;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;


export const LogoContainer = styled(Link)`
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
  margin-top: 30px;
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
  color: #CD6F18;       // Adjust the text color as needed
  font-family: 'Playfair Display', serif;  // Use Playfair Display font
  text-transform: uppercase;     // Convert text to uppercase
  letter-spacing: 3px;           // Adjust the letter spacing as needed

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
  transition: color 0.2s ease-in, border-bottom 0.2s ease-in;
  margin: 0.5rem 2rem;
  position: relative;  // Add relative positioning

  &:hover {
      color: #2551a1;  // Change the color on hover
      border-bottom: 2px solid #2551a1;  // Add the underline on hover
    }

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

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCoffee);
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 0 6rem 0 6rem;
  padding: 0.5rem 1.5rem;
  border: 0.1px solid #533c8e;
  border-radius: 1rem;
  z-index: 2;
  backdrop-filter: blur(3rem);
  top: 1rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledImg = styled.img`
  height: 3rem;
`;
const StyledUlList = styled.ul`
  font-family: "Inter", sans-serif;
  display: inline-flex;
  gap: 1rem;
`;

const StyledList = styled.li`
  list-style: none;
  font-size: 0.8rem;
  line-height: 1.5rem;
  color: #fff;
`;

const StyledButton = styled.button`
  border: 2px solid #533c8e;
  border-radius: 0.4rem;
  color: #fff;
  padding: 0.1rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 30px;
  background: #533c8e;
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <StyledImg src="../../src/assets\images\favicon.png" alt="" />
      </div>
      <div>
        <StyledUlList>
          <StyledList>Home</StyledList>
          <StyledList>About Us</StyledList>
          <StyledList>Contact Us</StyledList>
          <StyledList>FAQs</StyledList>
        </StyledUlList>
      </div>
      <StyledButton>Login</StyledButton>
    </StyledHeader>
  );
};

export default Header;

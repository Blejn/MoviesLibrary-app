import React, { useEffect, useState } from "react";
import styled from "styled-components";

// STYLED COMPONENTS---------------------------------------------------
const Image = styled.img.attrs({
  src: `${"https://cdn.kibrispdr.org/data/749/netflix-logo-png-transparent-47.png"}`,
})`
  max-width: 150px;
  max-height: 100%;
  object-fit: contain;
  padding-top: 5px;
  padding-left: 20px;
  cursor: pointer;
  position: fixed;
  left: 0;
  border-radius: 3px;
`;

const Avatar = styled.img`
  right: 20px;
  position: fixed;
  padding-top: 10px;
  max-width: 50px;
  max-height: 50px;
  cursor: pointer;
  border-radius: 50%;
`;
const NavBanner = styled.div`
  transition: all 0.5s;
  background: ${props => props.back};
  left: 0;
  top: 0;
  height: 80px;
  width: 100%;
  overflow: overflow;
  position: fixed;
  z-index: 1;

  max-height: 300px;
`;
const Box = styled.div`
  display: flex;
  background: transparent;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

// COMPONENT---------------------------------------------------

const NavBar = () => {
  const [showBar, setShowBar] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <NavBanner back={!showBar ? "transparent" : "red"}>
      <Box>
        <Image />
        <Avatar src={"https://www.w3schools.com/w3images/avatar2.png"} alt="" />
      </Box>
    </NavBanner>
  );
};

export default NavBar;

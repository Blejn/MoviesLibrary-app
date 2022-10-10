import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Banner from "./Banner";
const MainMenu = styled.div`
  width: 100%;
`;
const Home = () => {
  return (
    <MainMenu>
      {/* NAVBAR */}
      <NavBar />

      {/* BANNER */}
      <Banner />
      {/* ROW */}
    </MainMenu>
  );
};

export default Home;

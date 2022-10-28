import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Line } from "../components/Line";
import requests from "../Requests";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

const MainMenu = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
const Bottom = styled.div`
  margin-top: 100px;
  width: 100%;
  background-color: black;
  height: 100px;
`;
const BottomContainer = styled.div`
  position: relative;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 20px;
  order: 3;
`;
const Home = () => {
  const [isTop10, setIsTop10] = useState(true);
  return (
    <MainMenu>
      {/* NAVBAR */}
      <NavBar p />

      {/* BANNER */}
      <Banner />
      <Line title="Popular" url={requests.fetchTrending} />
      <Line title="Top 10" url={requests.trendingWeek} isTop10={isTop10} />
      <Line title="News" />
      <Line title="Upcoming" url={requests.upcomingMovies} isTop10={isTop10} />
      <Line title="Kids" url={requests.popularForKid} />
      <Line title="Comedies" url={requests.fetchComedies} />
      <Bottom>
        <BottomContainer>
          <IconContext.Provider value={{ color: `#4267B2`, size: `30px` }}>
            <BsFacebook style={{ background: "white", borderRadius: "90%" }} />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "white",
              size: `30px`,
            }}
          >
            <BsInstagram />
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: `#0e76a8`,
              size: `30px`,
            }}
          >
            <BsLinkedin style={{ background: "white", borderRadius: "5px" }} />
          </IconContext.Provider>
        </BottomContainer>
      </Bottom>

      {/* ROW */}
    </MainMenu>
  );
};

export default Home;

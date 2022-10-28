import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
// STYLED COMPONENTS---------------------------------------------------
const Image = styled.img.attrs({
  src: `${"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"}`,
})`
  max-width: 150px;
  max-height: 100%;
  object-fit: contain;
  padding-top: 20px;
  padding-left: 20px;
  cursor: pointer;
  position: fixed;
  left: 0;
  border-radius: 3px;
`;
const Text = styled.div`
  margin-right: 1rem;
  display: inline;
  color: rgb(255, 255, 255);
  cursor: pointer;
  &:hover {
    color: rgba(86, 95, 108, 1);
  }
`;
const Categories = styled.div`
  display: inline;

  max-width: 400px;
  height: 50px;
  object-fit: contain;

  padding-top: 30px;
  padding-left: 20px;

  position: fixed;
  left: 190px;
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
const Input = styled.input`
  transition: all 0.25s ease-out;
  right: 150px;
  position: fixed;
  margin-top: 25px;
  max-width: 200px;
  max-height: 50px;

  border-radius: 5px;
`;
// COMPONENT---------------------------------------------------

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const clickHandler = () => {
    setShowSearch(!showSearch);
  };

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
    <NavBanner back={!showBar ? "transparent" : "black"}>
      <Box>
        <Image />
        <Categories>
          <Text>Home Page</Text>
          <Text>Series</Text>
          <Text>News</Text>
          <Text>Movies</Text>
          <Text>My List</Text>
        </Categories>

        <IoIosNotifications
          style={{
            color: "white",
            fontSize: "30px",
            right: "80px",
            position: "fixed",
            paddingTop: "20px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        />

        {showSearch ? (
          <form>
            <Input></Input>
          </form>
        ) : (
          <AiOutlineSearch
            style={{
              transition: "all 0.5s",
              color: "white",
              fontSize: "30px",
              right: "120px",
              position: "fixed",
              paddingTop: "20px",
              cursor: "pointer",
              marginRight: "20px",
            }}
            onClick={clickHandler}
          />
        )}

        <Avatar src={"https://www.w3schools.com/w3images/avatar2.png"} alt="" />
      </Box>
    </NavBanner>
  );
};

export default NavBar;

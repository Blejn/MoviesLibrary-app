import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import axios from "../axios";
import requests from "../Requests";

const Header = styled.header`
  background-color: rgba(0, 0, 0, 1);
  background-size: cover;
  max-width: 100%;

  background-image: ${props => props.url};

  background-position: center center;
  position: relative;
  height: 600px;

  color: white;
  object-fit: contain;
`;
const Content = styled.div`
  margin-left: 30px;
  padding-top: 150px;
  height: 200px;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;
const Text = styled.div`
  padding-bottom: 1rem;
  position: relative;
  display: inline;
  font-size: 2rem;
  margin-left: 1rem;
  vertical-align: middle;
`;
const Buttons = styled.div`
  display: inline;
  margin-bottom: 20px;
`;
const Button = styled.button`
  max-width: 400px;
  max-height: 200px;
  padding: 0.8rem;
  cursor: pointer;
  display: inline;
  position: relative;
  background: transparent;
  outline: none;
  background-color: rgba(86, 95, 108, 0.5);
  border-radius: 5px;
  border: none;
  margin-right: 3rem;
  color: white;
  &:hover {
    transition: all 0.4s;
    background-color: rgba(86, 95, 108, 1);
  }
`;
const Description = styled.h2`
  padding-top: 3rem;
  max-width: 600px;
`;
const Bottom = styled.div`
  width: 100%;
  position: absolute;
  height: 8rem;
  bottom: 0;
  background: linear-gradient(transparent, rgba(37, 37, 37, 0.5), #111);
`;

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(requests.randomMovie);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  const cutText = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  return (
    <>
      <Header
        url={`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}
      >
        <Content>
          <Title>{movie?.name}</Title>
          <Buttons>
            <Button>
              <BsFillPlayFill
                style={{
                  color: "white",
                  fontSize: "30px",
                  cursor: "pointer",

                  verticalAlign: "middle",
                }}
              />
              <Text>Start</Text>
            </Button>
            <Button>
              <BsList
                style={{
                  color: "white",
                  fontSize: "30px",
                  cursor: "pointer",

                  verticalAlign: "middle",
                }}
              />
              <Text>More information</Text>
            </Button>
            <Description>{cutText(`${movie?.overview}`, 150)}</Description>
          </Buttons>
        </Content>

        <Bottom />
      </Header>
    </>
  );
};

export default Banner;

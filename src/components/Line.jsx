import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import LineElement from "./ListElement";
import styled from "styled-components";
const Title = styled.h2`
  color: white;
  margin-bottom: 10px;
`;
const Container = styled.div`
  margin-top: 2rem;
`;
const ListContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  vertical-align: middle;

  background: transparent;
  width: 100%;

  height: ${props => props.height};
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Line = ({ title, url, isTop10 }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(url);
      setMovies(res?.data?.results);
    };
    fetchMovies();
  }, [url]);
  console.log(movies);
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer height={isTop10 ? "400px" : "120px"}>
        {movies?.map(movie => {
          return <LineElement movie={movie} isTop10={isTop10} />;
        })}
      </ListContainer>
    </Container>
  );
};

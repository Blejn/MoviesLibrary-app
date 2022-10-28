import React from "react";
import styled from "styled-components";
const Image = styled.img`
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
  margin-top: 20px;
  max-height: ${props => props.height};
  width: ${props => props.width};
  object-fit: contain;
  transition: transform 0.2s ease-in;
  position: relative;

  vertical-align: middle;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;

const ListElement = ({ movie, isTop10 }) => {
  if (isTop10 === true) {
    var path = movie?.poster_path;
  } else {
    path = movie?.backdrop_path;
  }

  return (
    <Image
      key={movie.id}
      src={`https://image.tmdb.org/t/p/original/${path}`}
      alt={movie.name}
      height={isTop10 ? "300px" : "100px"}
      width={isTop10 ? "200px" : "100%"}
    ></Image>
  );
};

export default ListElement;

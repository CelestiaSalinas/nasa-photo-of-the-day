import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: slateblue;
  border: 2px solid slateblue;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 125px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: slateblue;
    color: white;
  }
`;

const Explain = styled.p`
  margin-left: 20vw;
  margin-right: 20vw;
  margin-bottom: 10vw;
  text-align: center;
`;

const Content = props => {
  return (
    <div>
      <Button variant="primary">Previous</Button>
      <Button variant="primary">Next</Button>
      <h3>{props.title}</h3>
      <h3>Photographer: {props.copyright}</h3>
      <h3>Date taken: {props.date}</h3>
      <Explain>{props.explanation}</Explain>
    </div>
  );
};

export default Content;

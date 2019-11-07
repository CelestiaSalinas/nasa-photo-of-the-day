import React from "react";
import styled from "styled-components";

const Img = styled.img`
  border: 25px slateblue solid;
  padding: 25px;
  margin: 10px;
  max-width: 30vw;
`;

const ImgBox = props => {
  return (
    <div class="img-box" key={props.id}>
      <h1>NASA Photo of the Day</h1>
      <Img src={props.hdurl}></Img>
    </div>
  );
};

export default ImgBox;

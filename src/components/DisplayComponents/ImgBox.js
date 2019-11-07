import React from "react";

const ImgBox = props => {
  return (
    <div class="img-box" key={props.id}>
      <h1>NASA Photo of the Day</h1>
      <img src={props.hdurl} />
      <h2>Photographer: {props.copyright}</h2>
      <h3>Date taken: {props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  );
};

export default ImgBox;

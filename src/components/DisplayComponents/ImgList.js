import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgBox from "./ImgBox";
const ImgList = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response.data);
        setImage(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div>
      <ImgBox
        image={image}
        title={image.title}
        hdurl={image.url}
        explanation={image.explanation}
        date={image.date}
      />
    </div>
  );
};
export default ImgList;

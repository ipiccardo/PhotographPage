import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useState, useLayoutEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../Footer/Footer";
import "../galery.css";

const Maradona = ({ handleClick, setData, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setData(itemDataTwo);
    data.length && setIsLoaded(true);
    // setTimeout(() => {
    //   data.length && setIsLoaded(true);
    // }, 300);
  }, [setData, handleClick, data]);

  const orderedData = [...itemDataTwo].sort((a, b) => a.order - b.order);

  return (
    <>
      <div className="galeryContainer">
        <ImageList sx={{ width: "80%", height: "100%" }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              component="div"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              Maradona
            </ListSubheader>
          </ImageListItem>
          {!isLoaded ? (
            <div className="spinnerContainer">
              <Spinner />
            </div>
          ) : (
            orderedData.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  id={item.id}
                  className="multyImage"
                  onClick={handleClick}
                  src={`/assets/archivo/maradona/${item.id}.jpg`}
                  srcSet={`/assets/archivo/maradona/${item.id}.jpg`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
      </div>
      <Footer />
    </>
  );
};
const itemDataTwo = [
  {
    // img: "https://drive.google.com/uc?export=view&id=147gSfUClTcd4l-0FyAmuelEFUGaOyYtR",
    img: "/assets/archivo/maradona/1.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1C3UmGWrrH7M7ottmJvfCtvb1EHoWxm0_",
    img: "/assets/archivo/maradona/2.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1kbB6CPAzHkgLfYiK_92-cseYVZwwz9SA",
    img: "/assets/archivo/maradona/3.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1q2Ljxvc0iPmCu5LpwMN3xkGewDnOorVu",
    img: "/assets/archivo/maradona/4.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=163M_pckfcZrJ4dwSJwlFTEqYEcR7Cqee",
    img: "/assets/archivo/maradona/5.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=19xLUnCOM79aMRq_pZe6nErvY5bD3wusF",
    img: "/assets/archivo/maradona/6.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1MPt458aiU4S57qzDLBD-8_dG0Y2tA5Nr",
    img: "/assets/archivo/maradona/7.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=15O8njTlnhWnBZMdpz8R1nSHuSkla3bw7",
    img: "/assets/archivo/maradona/8.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
];

export default Maradona;

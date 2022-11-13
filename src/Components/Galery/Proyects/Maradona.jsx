import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../Footer/Footer";
import "../galery.css";

const Maradona = ({ handleClick, setData }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 6000);
  });
  
  useEffect(() => {
    setData(itemDataTwo);
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [setData]);

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
            <Spinner />
          ) : 
          itemDataTwo.map((item) => (
            <ImageListItem key={item.img}>
              <img
                id={item.id}
                className="multyImage"
                onClick={handleClick}
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
const itemDataTwo = [
  {
    img: "https://drive.google.com/uc?export=view&id=147gSfUClTcd4l-0FyAmuelEFUGaOyYtR",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1C3UmGWrrH7M7ottmJvfCtvb1EHoWxm0_",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1kbB6CPAzHkgLfYiK_92-cseYVZwwz9SA",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1q2Ljxvc0iPmCu5LpwMN3xkGewDnOorVu",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=163M_pckfcZrJ4dwSJwlFTEqYEcR7Cqee",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=19xLUnCOM79aMRq_pZe6nErvY5bD3wusF",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1MPt458aiU4S57qzDLBD-8_dG0Y2tA5Nr",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=15O8njTlnhWnBZMdpz8R1nSHuSkla3bw7",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=147gSfUClTcd4l-0FyAmuelEFUGaOyYtR",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 9,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1C3UmGWrrH7M7ottmJvfCtvb1EHoWxm0_",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1kbB6CPAzHkgLfYiK_92-cseYVZwwz9SA",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 11,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1q2Ljxvc0iPmCu5LpwMN3xkGewDnOorVu",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 12,
  }
];

export default Maradona;

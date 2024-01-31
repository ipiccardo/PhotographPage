import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect, useState } from "react";
import "../galery.css";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../Footer/Footer";

const TresPicos = ({ handleClick, setData, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setData([]);
  }, [handleClick]);

  useEffect(() => {
    setData(itemData);
    // setTimeout(() => {
    //   setIsLoaded(true);
    // }, 1500);
  }, [setData]);

  useEffect(() => {
    if (data.length > 8) {
      setIsLoaded(true);
    }
  }, [data]);

  return (
    <>
      <div className="galeryContainer">
        <ImageList sx={{ width: "80%", height: "100%" }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              component="div"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              3 Picos
            </ListSubheader>
          </ImageListItem>
          {!isLoaded ? (
            <div className="spinnerContainer">
              <Spinner />
            </div>
          ) : (
            itemData.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  id={item.id}
                  className="multyImage"
                  onClick={handleClick}
                  src={`/assets/archivo/trespicos/${item.id}.jpg`}
                  srcSet={`/assets/archivo/trespicos/${item.id}.jpg`}
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
const itemData = [
  {
    // img: "https://drive.google.com/uc?export=view&id=1wC088M-SK8iIlKduTQN2uYcjEqEVkeds",
    img: "/assets/archivo/trespicos/1.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1RdI2cXkIBV3LKcxr-9dm2xZ0N-m7SdCx",
    img: "/assets/archivo/trespicos/2.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1BNe4BAYCeX79E9Ce8SneYnY02bXht-Sx",
    img: "/assets/archivo/trespicos/3.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1FeoL690Ad6X9kNFEOPJtKXb-aISU3zMV",
    img: "/assets/archivo/trespicos/4.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    cols: 2,
    id: 4,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=106Kbnz4lHV3MDtklYbcPYE_zsC4z38hM",
    img: "/assets/archivo/trespicos/5.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    cols: 2,
    id: 5,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1ksjtipSGA_0TgaWPGsa6bSfPzBblZqOa",
    img: "/assets/archivo/trespicos/6.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 6,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1J9QRDzgtVzhoykGHHYJZj3wWuzHmWrcF",
    img: "/assets/archivo/trespicos/7.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1SBJyrNb2UYiyeZ5-g4UXuIzYZDNKq8Gr",
    img: "/assets/archivo/trespicos/8.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1RusFJIHshN7APCRtDgUaZbRshXwZ_-32",
    img: "/assets/archivo/trespicos/9.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    id: 9,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1rt4j10VlrHe5putyaCYrpJJ2xcq3gYGU",
    img: "/assets/archivo/trespicos/10.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1eeoKcoLwI2Wkp02iNNl7ynpbqpST0U1X",
    img: "/assets/archivo/trespicos/11.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 11,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=10pCtsTAe7aHKDfEfTGje4LGVqbl-Ujwg",
    img: "/assets/archivo/trespicos/12.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    cols: 2,
    id: 12,
  },
];

export default TresPicos;

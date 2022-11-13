import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect, useState } from "react";
import "../galery.css";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../Footer/Footer";

const TresPicos = ({ handleClick, setData }) => {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  
  useEffect(() => {
    setData(itemData);
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [setData]);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 6000);
  });
 
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
            <Spinner />
          ) :
          itemData.map((item) => (
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
const itemData = [
  {
    img: "https://drive.google.com/uc?export=view&id=1wC088M-SK8iIlKduTQN2uYcjEqEVkeds",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1RdI2cXkIBV3LKcxr-9dm2xZ0N-m7SdCx",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1BNe4BAYCeX79E9Ce8SneYnY02bXht-Sx",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1FeoL690Ad6X9kNFEOPJtKXb-aISU3zMV",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    cols: 2,
    id: 4,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=106Kbnz4lHV3MDtklYbcPYE_zsC4z38hM",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    cols: 2,
    id: 5,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1ksjtipSGA_0TgaWPGsa6bSfPzBblZqOa",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 6,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1J9QRDzgtVzhoykGHHYJZj3wWuzHmWrcF",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1SBJyrNb2UYiyeZ5-g4UXuIzYZDNKq8Gr",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1RusFJIHshN7APCRtDgUaZbRshXwZ_-32",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    id: 9,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1rt4j10VlrHe5putyaCYrpJJ2xcq3gYGU",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1eeoKcoLwI2Wkp02iNNl7ynpbqpST0U1X",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 11,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=10pCtsTAe7aHKDfEfTGje4LGVqbl-Ujwg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    cols: 2,
    id: 12,
  },
];

export default TresPicos;

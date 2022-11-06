import * as React from "react";
import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import "./galery.css";
import GaleryItem from "./GaleryItem";
import { Button } from "@mui/material";

export const Galery = () => {
  const [showImage, setShowImage] = useState(false);
  const [photoSrc, setPhotoSrc] = useState("");
  const [photoId, setPhotoId] = useState();

  useEffect(() => {
    const filteredImg = itemData.find((item) => item.id === photoId);
    setPhotoSrc(filteredImg?.img);
  }, [photoId]);

  const handleClick = (e) => {
    setShowImage(!showImage);
    setPhotoSrc(e.target.src);
    setPhotoId(e.target.id);
  };

  return (
    <>
      {!showImage ? (
        <div>
          <ul className="listContainer">
            <li>
              <Button sx={{ backgroundColor: "black" }} variant="contained">
                3 Picos
              </Button>
            </li>
            <li>
              <Button sx={{ backgroundColor: "black" }} variant="contained">
                Proyecto 2
              </Button>
            </li>
            <li>
              <Button sx={{ backgroundColor: "black" }} variant="contained">
                Proyecto 3
              </Button>
            </li>
            <li>
              <Button sx={{ backgroundColor: "black" }} variant="contained">
                Proyecto 4
              </Button>
            </li>
            <li>
              <Button sx={{ backgroundColor: "black" }} variant="contained">
                Proyecto 5
              </Button>
            </li>
          </ul>
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
              {itemData.map((item) => (
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
        </div>
      ) : (
        <GaleryItem
          photoSrc={photoSrc}
          setPhotoSrc={setPhotoSrc}
          setShowImage={setShowImage}
          setPhotoId={setPhotoId}
          photoId={photoId}
        />
      )}
    </>
  );
};

const itemData = [
  {
    // img: "https://as01.epimg.net/meristation/imagenes/2021/09/17/noticias/1631884307_984778_1631884400_noticia_normal.jpg",
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

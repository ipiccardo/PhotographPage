import * as React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import "./galery.css";
import GaleryItem from "./GaleryItem";

export const Galery = () => {
  const [showImage, setShowImage] = useState(false);
  const [photoId, setPhotoId] = useState("");

  const handleClick = (e) => {
    setShowImage(!showImage);
    setPhotoId(e.target.src);
  };

  console.log(photoId);

  return (
    <>
      {!showImage ? (
        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">3 Picos</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                onClick={handleClick}
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <GaleryItem photoId={photoId} />
      )}
    </>
  );
};

const itemData = [
  {
    // img: "https://as01.epimg.net/meristation/imagenes/2021/09/17/noticias/1631884307_984778_1631884400_noticia_normal.jpg",
    img: "https://drive.google.com/uc?export=view&id=1wC088M-SK8iIlKduTQN2uYcjEqEVkeds",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1RdI2cXkIBV3LKcxr-9dm2xZ0N-m7SdCx",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1BNe4BAYCeX79E9Ce8SneYnY02bXht-Sx",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1FeoL690Ad6X9kNFEOPJtKXb-aISU3zMV",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];

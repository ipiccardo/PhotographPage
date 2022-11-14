import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect, useState } from "react";
import "../galery.css";
import Footer from "../../Footer/Footer";
import Spinner from "../../Spinner/Spinner";

export const LibroDeArtista = ({ handleClick, setData }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setData(itemDataFive);
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [setData]);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 2000);
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
              Libro de Artista
            </ListSubheader>
          </ImageListItem>
          {!isLoaded ? (
            <Spinner />
          ) : 
          itemDataFive.map((item) => (
            <ImageListItem key={item.id}>
              <img
                id={item.id}
                className="multyImage"
                onClick={handleClick}
                src={`/assets/librodeartista/grilla/${item.id}.jpg`}
                srcSet={`/assets/librodeartista/grilla/${item.id}.jpg`}
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
const itemDataFive = [
  {
    // img: "https://drive.google.com/uc?export=view&id=1OArt45tMD6Fh5odbsTWRwK6nc7yr2keu",
    img: '/assets/librodeartista/1.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1J0lkPcOaOqA5V3UI6uaBPqRlvhU8eKlH",
    img: '/assets/librodeartista/2.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=19vKjbe88lO7p60_AMrzF4vTEuDeZEI0z",
    img: '/assets/librodeartista/3.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1ZHgCP7odiIGPZ-J6I_5ptRkLFFfBG1Nn",
    img: '/assets/librodeartista/4.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1zk8EeFh7mjx_z_5w16Oox9Ow1mEyUegI",
    img: '/assets/librodeartista/5.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1HAoz-jlp33fRV3CnPxmEKNVIPV0A_x2e",
    img: '/assets/librodeartista/6.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1n8P5sUMTd8S3e2_w9-Mfy2GJRHtGnkhR",
    img: '/assets/librodeartista/7.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=10-APsmf0gsrUqeMSP5MuwNNPzNboLFuM",
    img: '/assets/librodeartista/8.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1IEMkfTaqLRfTXL8nWJUfcoPva09HCgr0",
    img: '/assets/librodeartista/9.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 9,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1A60YfqJEnHTNLlGXnsnlltlsBL1BjEFf",
    img: '/assets/librodeartista/10.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1OArt45tMD6Fh5odbsTWRwK6nc7yr2keu",
    img: '/assets/librodeartista/11.jpg',
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 11,
  },
];

export default LibroDeArtista;

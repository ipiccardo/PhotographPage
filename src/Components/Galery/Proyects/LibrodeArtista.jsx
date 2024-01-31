import React, { useLayoutEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useState } from "react";
import "../galery.css";
import Spinner from "../../Spinner/Spinner";
import Progress from "../../Progress/Progress";

export const LibroDeArtista = ({ handleClick, setData, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setData([]);
    setData(itemDataFive);
    setTimeout(() => {
      data.length && setIsLoaded(true);
    }, 500);
  }, [setData, handleClick]);

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
            <div className="spinnerContainer">
              <p className="progressContainer">
                <Progress />
              </p>
              <Spinner />
            </div>
          ) : (
            itemDataFive.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  id={item.id}
                  className="multyImage"
                  onClick={handleClick}
                  src={`/assets/librodeartista/${item.id}.jpg`}
                  srcSet={`/assets/librodeartista/${item.id}.jpg`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
      </div>
      {/* {showFooter && <Footer />} */}
    </>
  );
};
const itemDataFive = [
  {
    // img: "https://drive.google.com/uc?export=view&id=1OArt45tMD6Fh5odbsTWRwK6nc7yr2keu",
    img: "/assets/librodeartista/1.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    description:
      "Sirius recibe de manos de Yanina su recompensa por su buen comportamiento en la calle al dar su paseo diario por el barrio de Villa Crespo, CABA. Buenos Aires 21 de Septiembre de 2022",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1J0lkPcOaOqA5V3UI6uaBPqRlvhU8eKlH",
    img: "/assets/librodeartista/2.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
    description:
      "La limpieza del pizarron es una de las tareas que realiza Yani antes de recibir a los niños que participan del taller de juegos. Villa Crespo, CABA. Buenos Aires, 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=19vKjbe88lO7p60_AMrzF4vTEuDeZEI0z",
    img: "/assets/librodeartista/3.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    description:
      "Yani recortando figuras en cartulinas mientras espera el inicio del taller de juegos que da en el Espacio Enlaces 2 veces por semana en el barrio de Villa Crespo, CABA. Buenos Aires 22 de Septiembre de 2022",
    id: 3,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1ZHgCP7odiIGPZ-J6I_5ptRkLFFfBG1Nn",
    img: "/assets/librodeartista/4.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
    description:
      "La puesta a punto del salon donde Yani realiza el taller de juegos incluye armar el mini pelotero en el que juegan los chicos. Espacio Enlaces, Buenos Aires 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1zk8EeFh7mjx_z_5w16Oox9Ow1mEyUegI",
    img: "/assets/librodeartista/5.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
    description:
      "Yani preparando el salón para iniciar el taller de juegos que realiza en el Espacio Enlaces en el barrio de Villa Crespo, CABA. Buenos Aires 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1HAoz-jlp33fRV3CnPxmEKNVIPV0A_x2e",
    img: "/assets/librodeartista/6.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
    description:
      "Yani jugando con los niños del taller de juegos. Buenos Aires, 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1n8P5sUMTd8S3e2_w9-Mfy2GJRHtGnkhR",
    img: "/assets/librodeartista/7.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
    description:
      "Yani jugando con los niños del taller de juegos. Buenos Aires, 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=10-APsmf0gsrUqeMSP5MuwNNPzNboLFuM",
    img: "/assets/librodeartista/8.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
    description:
      "Yani leyendo un cuento a los niños al cierre del taller de juegos. Villa Crespo, CABA. Buenos Aires, 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1IEMkfTaqLRfTXL8nWJUfcoPva09HCgr0",
    img: "/assets/librodeartista/9.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 9,
    description:
      "Los niños esperando la meriedna, sentados en la mesa al finalizar el Taller de juegos de Espacio Enlaces. Buenos Aires, 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1A60YfqJEnHTNLlGXnsnlltlsBL1BjEFf",
    img: "/assets/librodeartista/10.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
    description:
      "Luego de finalizado el taller de juegos, el salón vuelve a estar en orden, esperando para otra jornada de risas y juegos. Espacio Enlaces. Villa Crespo, Buenos Aires, 22 de Septiembre de 2022",
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1OArt45tMD6Fh5odbsTWRwK6nc7yr2keu",
    img: "/assets/librodeartista/11.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 11,
    description:
      "Yani jugando con los niños del taller de juegos. Buenos Aires, 22 de Septiembre de 2022",
  },
];

export default LibroDeArtista;

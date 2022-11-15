import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect } from "react";
import "../galery.css";
import Footer from "../../Footer/Footer";
import Spinner from "../../Spinner/Spinner";


export const FotoReportaje = ({ handleClick, setData,}) => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    setData(itemDataFour);
    setIsLoaded(false)
    setTimeout(() => {
      setIsLoaded(true)  
    }, 1000)
  }, [setData]);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true)
    }, 2500)
  })


  return (
    <>

  <div className="galeryContainer">
        <ImageList sx={{ width: "80%", height: "100%" }} >
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              component="div"
              sx={{ backgroundColor: "black", color: "white" }}
              >
              Foto Reportaje
            </ListSubheader>
          </ImageListItem>
        {
          !isLoaded ? <Spinner />
          :
          itemDataFour.map((item) => (
            <ImageListItem key={item.img}>
              <img
                id={item.id}
                className="multyImage"
                onClick={handleClick}
                src={`/assets/fotorreportaje/${item.id}.jpg`}
                srcSet={`/assets/fotorreportaje/${item.id}.jpg`}
                alt={item.title}     
                loading="lazy"
                />
            </ImageListItem>
          ))
        } 
        </ImageList>
      </div>
    {
    showFooter && 
        <Footer />
}
    </>
  );
};
const itemDataFour = [
  {
    // img: "https://drive.google.com/uc?export=view&id=1jHcfM8tL0PZghPEkrkju80BB-BkQKss-",
    img: '/assets/fotorreportaje/1.jpg',
    title: "Nombre de la foto",
    id: 1,
    description: 'Un piloto de aviones limpiando la ventana antes de comenzar su dia laboral. Aeroparque, CABA, Octubre 2022'

  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1eS3pNGB6npUhE7l_z3We34C7sKkuf3Xx",
    img: '/assets/fotorreportaje/2.jpg',
    title: "Nombre de la foto",
    id: 2,
    description:'Camino a casa por la avenida General Paz sentido Riachuelo. 8 de octubre de 2022, Avenida general Paz /Jimena Avalos',
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1BZ5eoBbmxN1sPKCbLHXqXCAyY2Om6J15",
    img: '/assets/fotorreportaje/3.jpg',
    title: "Nombre de la foto",
    id: 3,
    description: 'Trafico en Av. General Paz. 13 de agosto de 2021. Buenos Aires, Argentina.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1VZWbgCMM9f8mx8cEPhOM67uk5qtsNzZv",
    img: '/assets/fotorreportaje/4.jpg',
    title: "Nombre de la foto",
    id: 4,
    description: 'Histórico carrusel del barrio de Palermo ubicado en los Arcos del Rosedal (ex Paseo de la Infanta). 07 de Octubre de 2022, C.A.B.A., Argentina.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=16VVcnG7xUcxu7BevtobW7kthQ2NG-hry",
    img: '/assets/fotorreportaje/5.jpg',
    title: "Nombre de la foto",
    id: 5,
    description: 'Un grupo de personas transita por la estación Diagonal Norte del subte, en la Ciudad Autónoma de Buenos Aires, Argentina, el 6 de Octubre de 2022.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1_txN1FkDU_Xs8ybOTsrgpcP7Rfmr7GDr",
    img: '/assets/fotorreportaje/6.jpg',
    title: "Nombre de la foto",
    id: 6,
    description: 'Un grupo de personas espera el subte en la estación Diagonal Norte, en la Ciudad Autónoma de Buenos Aires, Argentina, el 6 de Octubre de 2022.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1QascMUGPTEMrojDmbL3YjJpDOMpn5fm4",
    img: '/assets/fotorreportaje/7.jpg',
    title: "Nombre de la foto",
    id: 7,
    description: 'Vista de la puerta de la casa de Luca Prodan, en la Ciudad Autónoma de Buenos Aires, Argentina, el 6 de Octubre de 2022.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1RaCMbsHgePTdojSCF5bJZc1rliQA0Ioc",
    img: '/assets/fotorreportaje/8.jpg',
    title: "Nombre de la foto",
    id: 8,
    description: 'Vista de la calle Diagonal Sur, en la Ciudad Autónoma de Buenos Aires, Argentina, el 6 de Octubre de 2022.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=10_bWMB5GdF0pDdHs7YcYWmnU1sni6unn",
    img: '/assets/fotorreportaje/9.jpg',
    title: "Nombre de la foto",
    id: 9,
    description: 'Vista de un garage en el barrio de San Cristóbal, en la Ciudad Autónoma de Buenos Aires, Argentina, el 21 de Octubre de 2022.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1iGAOHxIqfwnqq6nmVe8-T1Qkj31Aq7jj",
    img: '/assets/fotorreportaje/10.jpg',
    title: "Nombre de la foto",
    id: 10,
    description: 'Vista de vereda de la calle General Urquiza en el barrio de San Cristóbal, en la Ciudad Autónoma de Buenos Aires, Argentina, el 21 de Octubre de 2022.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1YTyjmUyQo-d_hslf-8ESMdQS4lAfWsGI",
    img: '/assets/fotorreportaje/11.jpg',
    title: "Nombre de la foto",
    id: 11,
    description: 'Vista de una plaza en el microcentro de la Ciudad Autónoma de Buenos Aires, Argentina, el 21 de Octubre de 2022.'
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1TU3JcG4XJ95LC81fB2gj1nKmfnQVUDIT",
    img: '/assets/fotorreportaje/12.jpg',
    title: "Nombre de la foto",
    id: 12,
    description: 'Juguetes donados que conforman una de las esculturas emplazadas en el anfiteatro del Distrito Arcos. Ciudad Autónoma de Buenos Aires, 09 de octubre de 2022.'
  },
];

export default FotoReportaje;

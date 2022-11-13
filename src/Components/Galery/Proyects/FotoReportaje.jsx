import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect } from "react";
import "../galery.css";
import Footer from "../../Footer/Footer";
import Spinner from "../../Spinner/Spinner";


export const FotoReportaje = ({ handleClick, setData }) => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    setData(itemDataFour);
    setIsLoaded(false)
    setTimeout(() => {
      setIsLoaded(true)  
    }, 2000)
  }, [setData]);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true)
    }, 6000)
  })


  return (
    <>

  <div className="galeryContainer">
        <ImageList sx={{ width: "80%", height: "100%" }}>
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
            <ImageListItem  key={item.img}>
              <img
                id={item.id}
                className="multyImage"
                onClick={handleClick}
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                // loading="lazy"
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
    img: "https://drive.google.com/uc?export=view&id=1jHcfM8tL0PZghPEkrkju80BB-BkQKss-",
    title: "Nombre de la foto",
    id: 1,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1eS3pNGB6npUhE7l_z3We34C7sKkuf3Xx",
    title: "Nombre de la foto",
    id: 2,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1BZ5eoBbmxN1sPKCbLHXqXCAyY2Om6J15",
    title: "Nombre de la foto",
    id: 3,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1VZWbgCMM9f8mx8cEPhOM67uk5qtsNzZv",
    title: "Nombre de la foto",
    id: 4,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=16VVcnG7xUcxu7BevtobW7kthQ2NG-hry",
    title: "Nombre de la foto",
    id: 5,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1_txN1FkDU_Xs8ybOTsrgpcP7Rfmr7GDr",
    title: "Nombre de la foto",
    id: 6,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1QascMUGPTEMrojDmbL3YjJpDOMpn5fm4",
    title: "Nombre de la foto",
    id: 7,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1RaCMbsHgePTdojSCF5bJZc1rliQA0Ioc",
    title: "Nombre de la foto",
    id: 8,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=10_bWMB5GdF0pDdHs7YcYWmnU1sni6unn",
    title: "Nombre de la foto",
    id: 9,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1iGAOHxIqfwnqq6nmVe8-T1Qkj31Aq7jj",
    title: "Nombre de la foto",
    id: 10,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1YTyjmUyQo-d_hslf-8ESMdQS4lAfWsGI",
    title: "Nombre de la foto",
    id: 11,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1TU3JcG4XJ95LC81fB2gj1nKmfnQVUDIT",
    title: "Nombre de la foto",
    id: 12,
  },
];

export default FotoReportaje;

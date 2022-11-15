import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Spinner from "../../Spinner/Spinner";
import "../galery.css";

export const TrabajosPracticos = ({ handleClick, setData }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setData(itemDataSix);
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
              Trabajos Practicos
            </ListSubheader>
          </ImageListItem>
          {!isLoaded ? (
            <Spinner />
          ) : 
          itemDataSix.map((item) => (
            <ImageListItem key={item.img}>
              <img
                id={item.id}
                className="multyImage"
                onClick={handleClick}
                src={`/assets/trabajospracticos/${item.id}.jpg`}
                srcSet={`/assets/trabajospracticos/${item.id}.jpg`}
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
const itemDataSix = [
  {
    // img: "https://drive.google.com/uc?export=view&id=1t0Db1Y9P_-lbqoOeYBEE474cnzt-hycq",
    img: `/assets/trabajospracticos/1.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1hcXy6U2ZIG6tZ3OJE8F76VfMaGvK8Yk8",
    img: `/assets/trabajospracticos/2.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1miawqS-E9Ootyd6os1UQ60Khx5y9mVE6",
    img: `/assets/trabajospracticos/3.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=19aiMrRJQ8r0U_0tLKHcQM_rWWoSsBgby",
    img: `/assets/trabajospracticos/4.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1Fpk9CcbEeD0Gi8j9PBfHuJd5t8GPOAZx",
    img: `/assets/trabajospracticos/5.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1nd56V4P7jkYgAY4E3XZp0G7j9ye83Pba",
    img: `/assets/trabajospracticos/6.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1Yjxwx_4X957TFmChugAEdNwTKKa7H0GD",
    img: `/assets/trabajospracticos/7.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1HoxGDhCS4keNdPNGU61l8y8Y29aN-28Q",
    img: `/assets/trabajospracticos/8.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1Wdw_iWIA-p9QKE5YhoS0TY7k3weLF89Z",
    img: `/assets/trabajospracticos/9.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 9,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1d6l2v0w78IegVdT9fl1M7SAGuOgUqkeQ",
    img: `/assets/trabajospracticos/10.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=159cG-2For_LGp4HcZKScuezKpXTMRVli",
    img: `/assets/trabajospracticos/11.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 11,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1ReVSmcwjjhLuF4hZtRtnEtJw8qAlSHpa",
    img: `/assets/trabajospracticos/12.jpg`,
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 12,
  }
];

export default TrabajosPracticos;

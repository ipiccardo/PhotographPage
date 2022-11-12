import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import "../galery.css";

export const TrabajosPracticos = ({ handleClick, setData }) => {
  useEffect(() => {
    setData(itemDataSix);
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
              Trabajos Practicos
            </ListSubheader>
          </ImageListItem>
          {itemDataSix.map((item) => (
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
      <Footer />
    </>
  );
};
const itemDataSix = [
  {
    img: "https://drive.google.com/uc?export=view&id=1t0Db1Y9P_-lbqoOeYBEE474cnzt-hycq",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1hcXy6U2ZIG6tZ3OJE8F76VfMaGvK8Yk8",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1miawqS-E9Ootyd6os1UQ60Khx5y9mVE6",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=19aiMrRJQ8r0U_0tLKHcQM_rWWoSsBgby",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1Fpk9CcbEeD0Gi8j9PBfHuJd5t8GPOAZx",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1nd56V4P7jkYgAY4E3XZp0G7j9ye83Pba",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1Yjxwx_4X957TFmChugAEdNwTKKa7H0GD",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1HoxGDhCS4keNdPNGU61l8y8Y29aN-28Q",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1Wdw_iWIA-p9QKE5YhoS0TY7k3weLF89Z",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 9,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1d6l2v0w78IegVdT9fl1M7SAGuOgUqkeQ",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=159cG-2For_LGp4HcZKScuezKpXTMRVli",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 11,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1ReVSmcwjjhLuF4hZtRtnEtJw8qAlSHpa",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 12,
  }
];

export default TrabajosPracticos;

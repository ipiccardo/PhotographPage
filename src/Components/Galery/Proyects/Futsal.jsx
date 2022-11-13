import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect, useState } from "react";
import "../galery.css";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../Footer/Footer";

const Futsal = ({ handleClick, setData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 6000);
  });

  useEffect(() => {
    setData(itemDataThree);
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
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
              Futsal
            </ListSubheader>
          </ImageListItem>
          {!isLoaded ? (
            <Spinner />
          ) : 
            itemDataThree.map((item) => (
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
            ))
          }
        </ImageList>
      </div>
      {showFooter && <Footer />}
    </>
  );
};
const itemDataThree = [
  {
    img: "https://drive.google.com/uc?export=view&id=1qMoE7zxZxU8UYW7S06lGd4HBla6SuiP9",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=13AgQuibBxZQFUr7BRn0IVKyfB03kevtt",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1LoDSbeedN0Yo88rc_RLQErgC_kRso5ih",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1q8d2vYeQKle5TwKHKFZb7NbxS1ubLacJ",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1i8L8bQ0jyH6WTL_5laYas6Gy7NKKoE6G",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1C1cYieMDTq64B6r0lfPCyhxNtv6ydWPc",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=19JrkEf6rw62DjrLI6V65fccFzzPM0KR-",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=13qebAxoxhaakbycGiVkZxb1Al3NirjyR",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1PpNdk-S8iONh473_S-NwYclPk-FhtHuF",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 9,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1XNWoPymJNWcSB6qN0O0INTYi1X9M4lVZ",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1c82dDe739Y3FsqHu5q2uOhXfzFAvOf4Y",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 11,
  },
  {
    img: "https://drive.google.com/uc?export=view&id=19kcYvUDeYtJQKo--sm2A3RKlyluaOFP8",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 12,
  },
];

export default Futsal;

import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect, useState } from "react";
import "../galery.css";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../Footer/Footer";

const Futsal = ({ handleClick, setData, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setData(itemDataThree);

    // setIsLoaded(true);
    // setTimeout(() => {
    //   setIsLoaded(true);
    // }, 500);
  }, [setData]);

  useEffect(() => {
    if (data.length > 8) {
      setIsLoaded(true);
    }
  }, [data]);

  return (
    <>
      <div className="galeryContainer">
        <ImageList sx={{ width: "80%", height: "100%" }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              component="div"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              Futsal Brown
            </ListSubheader>
          </ImageListItem>
          {!isLoaded ? (
            <div className="spinnerContainer">
              <Spinner />
            </div>
          ) : (
            itemDataThree.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  id={item.id}
                  className="multyImage"
                  onClick={handleClick}
                  src={`/assets/archivo/futsal/${item.id}.jpg`}
                  srcSet={`/assets/archivo/futsal/${item.id}.jpg`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
      </div>
      <Footer />
    </>
  );
};
const itemDataThree = [
  {
    // img: "https://drive.google.com/uc?export=view&id=1qMoE7zxZxU8UYW7S06lGd4HBla6SuiP9",
    img: "/assets/archivo/futsal/1.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 1,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=13AgQuibBxZQFUr7BRn0IVKyfB03kevtt",
    img: "/assets/archivo/futsal/2.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 2,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1LoDSbeedN0Yo88rc_RLQErgC_kRso5ih",
    img: "/assets/archivo/futsal/3.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 3,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1q8d2vYeQKle5TwKHKFZb7NbxS1ubLacJ",
    img: "/assets/archivo/futsal/4.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 4,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1i8L8bQ0jyH6WTL_5laYas6Gy7NKKoE6G",
    img: "/assets/archivo/futsal/5.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 5,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1C1cYieMDTq64B6r0lfPCyhxNtv6ydWPc",
    img: "/assets/archivo/futsal/6.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 6,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=19JrkEf6rw62DjrLI6V65fccFzzPM0KR-",
    img: "/assets/archivo/futsal/7.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 7,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=13qebAxoxhaakbycGiVkZxb1Al3NirjyR",
    img: "/assets/archivo/futsal/8.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 8,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1PpNdk-S8iONh473_S-NwYclPk-FhtHuF",
    img: "/assets/archivo/futsal/9.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    rows: 2,
    cols: 2,
    featured: true,
    id: 9,
  },
  {
    // img: "https://drive.google.com/uc?export=view&id=1XNWoPymJNWcSB6qN0O0INTYi1X9M4lVZ",
    img: "/assets/archivo/futsal/10.jpg",
    title: "Nombre de la foto",
    author: "Alexis Fernández",
    id: 10,
  },
];

export default Futsal;

import * as React from "react";
import { useState, useEffect } from "react";
import "./galery.css";
import GaleryItem from "./GaleryItem";
import TresPicos from "./Proyects/TresPicos";
import ProyectList from "./Proyects/ProyectList";
import ProyectoPrueba from "./Proyects/ProyectoPrueba";

export const Galery = () => {
  const [showImage, setShowImage] = useState(false);
  const [photoSrc, setPhotoSrc] = useState("");
  const [photoId, setPhotoId] = useState();
  const [proyectName, setProyectName] = useState("tres picos");
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredImg = data.find((item) => item.id === photoId);
    setPhotoSrc(filteredImg?.img);
  }, [photoId, data]);

  const handleClick = (e) => {
    setShowImage(!showImage);
    setPhotoSrc(e.target.src);
    setPhotoId(e.target.id);
  };

  const handleProyectChange = (e) => {
    setProyectName(e.target.name);
  };

  const proyect = () => {
    switch (proyectName) {
      case "tres picos":
        return (
          <TresPicos
            handleClick={handleClick}
            showImage={showImage}
            setShowImage={setShowImage}
            setPhotoSrc={setPhotoSrc}
            photoId={photoId}
            setData={setData}
            data={data}
          />
        );
      case "Proyecto Prueba":
        return (
          <ProyectoPrueba
            handleClick={handleClick}
            showImage={showImage}
            setShowImage={setShowImage}
            setPhotoSrc={setPhotoSrc}
            photoId={photoId}
            setData={setData}
          />
        );
      default:
        return;
    }
  };

  return (
    <>
      {!showImage ? (
        <div>
          <ProyectList
            handleProyectChange={handleProyectChange}
            proyect={proyectName}
          />
          {proyect(proyectName)}
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

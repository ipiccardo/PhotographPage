import * as React from "react";
import { useState, useEffect } from "react";
import TresPicos from "./Proyects/TresPicos";
import ProyectList from "./Proyects/ProyectList";
import Maradona from "./Proyects/Maradona";
import GaleryItem from "./GaleryItem";
import Futsal from "./Proyects/Futsal";
import "./galery.css";
import FotoReportaje from "./Proyects/FotoReportaje";
import LibroDeArtista from "./Proyects/LibrodeArtista";
import TrabajosPracticos from "./Proyects/TrabajosPracticos";

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
      case "Maradona":
        return (
          <Maradona
            handleClick={handleClick}
            showImage={showImage}
            setShowImage={setShowImage}
            setPhotoSrc={setPhotoSrc}
            photoId={photoId}
            setData={setData}
          />
        );
        case "Futsal":
        return (
          <Futsal
            handleClick={handleClick}
            showImage={showImage}
            setShowImage={setShowImage}
            setPhotoSrc={setPhotoSrc}
            photoId={photoId}
            setData={setData}
          />
        );
        // case "FotoReportaje":
        // return (
        //   <FotoReportaje
        //     handleClick={handleClick}
        //     showImage={showImage}
        //     setShowImage={setShowImage}
        //     setPhotoSrc={setPhotoSrc}
        //     photoId={photoId}
        //     setData={setData}
        //   />
        // );
        // case "LibroDeArtista":
        //   return (
        //     <LibroDeArtista
        //       handleClick={handleClick}
        //       showImage={showImage}
        //       setShowImage={setShowImage}
        //       setPhotoSrc={setPhotoSrc}
        //       photoId={photoId}
        //       setData={setData}
        //     />
        //   );
        //   case "TrabajosPracticos":
        //   return (
        //     <TrabajosPracticos
        //       handleClick={handleClick}
        //       showImage={showImage}
        //       setShowImage={setShowImage}
        //       setPhotoSrc={setPhotoSrc}
        //       photoId={photoId}
        //       setData={setData}
        //     />
        //   );
      default:
        return;
    }
  };

  return (
    <>
      {!showImage ? (
        <div className="page-container">
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

import * as React from "react";
import { Suspense, lazy } from "react";
import { useState, useEffect } from "react";
import "./galery.css";

const TresPicos = lazy(() => import("./Proyects/TresPicos"));
const ProyectList = lazy(() => import("./Proyects/ProyectList"));
const ProyectoPrueba = lazy(() => import("./Proyects/ProyectoPrueba"));
const GaleryItem = lazy(() => import("./GaleryItem"));

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
          <Suspense fallback={<h1>Cargando...</h1>}>
            <TresPicos
              handleClick={handleClick}
              showImage={showImage}
              setShowImage={setShowImage}
              setPhotoSrc={setPhotoSrc}
              photoId={photoId}
              setData={setData}
              data={data}
            />
          </Suspense>
        );
      case "Proyecto Prueba":
        return (
          <Suspense fallback={<h1>Cargando...</h1>}>
            <ProyectoPrueba
              handleClick={handleClick}
              showImage={showImage}
              setShowImage={setShowImage}
              setPhotoSrc={setPhotoSrc}
              photoId={photoId}
              setData={setData}
            />
          </Suspense>
        );
      default:
        return;
    }
  };

  return (
    <>
      {!showImage ? (
        <div>
          <Suspense fallback={<h1>Cargando...</h1>}>
            <ProyectList
              handleProyectChange={handleProyectChange}
              proyect={proyectName}
            />
          </Suspense>
          {proyect(proyectName)}
        </div>
      ) : (
        <Suspense fallback={<h1>Cargando...</h1>}>
          <GaleryItem
            photoSrc={photoSrc}
            setPhotoSrc={setPhotoSrc}
            setShowImage={setShowImage}
            setPhotoId={setPhotoId}
            photoId={photoId}
          />
        </Suspense>
      )}
    </>
  );
};

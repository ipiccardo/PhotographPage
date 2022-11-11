import React, {Suspense, lazy} from "react";
import { HomeScreen } from "../HomeScreen/HomeScreen";
import { Galery } from "../Galery/Galery";
import { Routes, Route, Navigate } from "react-router-dom";
import { Biography } from "../Biography/Biography";
import { FotoReportaje } from "../Galery/Proyects/FotoReportaje";
import { TrabajosPracticos } from "../Galery/Proyects/TrabajosPracticos";
import { LibroDeArtista } from "../Galery/Proyects/LibrodeArtista";
import { Archivo } from "../Archivo/Archivo";
import { Contacto } from "../Contacto/Contacto";
import { useState, useEffect } from "react";
import { GaleryItem } from "../Galery/GaleryItem";


export const DashBoardRoutes = () => {
  const [showImage, setShowImage] = useState(false);
  const [photoSrc, setPhotoSrc] = useState("");
  const [photoId, setPhotoId] = useState();
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

  return (
    <>
      <Routes>
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path='Biography' element={<Biography />} />
        <Route
          path="/FotoReportaje"
          element={
            !showImage ? (
                (
                  <FotoReportaje
                  handleClick={handleClick}
                  showImage={showImage}
                  setShowImage={setShowImage}
                  setPhotoSrc={setPhotoSrc}
                  photoId={photoId}
                  setPhotoId={setPhotoId}
                  setData={setData}
                  data={data}
                  />
                  )    
            ) : (
              <GaleryItem
                photoSrc={photoSrc}
                setPhotoSrc={setPhotoSrc}
                setShowImage={setShowImage}
                setPhotoId={setPhotoId}
                photoId={photoId}
              />
            )
          }
        />
        <Route
          path="/TrabajosPracticos"
          element={
            !showImage ? (
              <TrabajosPracticos
                handleClick={handleClick}
                showImage={showImage}
                setShowImage={setShowImage}
                setPhotoSrc={setPhotoSrc}
                photoId={photoId}
                setData={setData}
                data={data}
              />
            ) : (
              <GaleryItem
                photoSrc={photoSrc}
                setPhotoSrc={setPhotoSrc}
                setShowImage={setShowImage}
                setPhotoId={setPhotoId}
                photoId={photoId}
              />
            )
          }
        />
        <Route
          path="/LibroDeArtista"
          element={
            !showImage ? (
              <LibroDeArtista
                handleClick={handleClick}
                showImage={showImage}
                setShowImage={setShowImage}
                setPhotoSrc={setPhotoSrc}
                photoId={photoId}
                setData={setData}
                data={data}
              />
            ) : (
              <GaleryItem
                photoSrc={photoSrc}
                setPhotoSrc={setPhotoSrc}
                setShowImage={setShowImage}
                setPhotoId={setPhotoId}
                photoId={photoId}
              />
            )
          }
        />
        <Route
          path="/Archivo"
          element={
            <Archivo
              handleClick={handleClick}
              showImage={showImage}
              setShowImage={setShowImage}
              setPhotoSrc={setPhotoSrc}
              photoId={photoId}
              setData={setData}
              data={data}
            />
          }
        />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/*" element={<Navigate to="HomeScreen" />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;

import React from "react";
import "./homeScreen.css";
import Biography from "../Biography/Biography";
import FotoReportaje from "../Galery/Proyects/FotoReportaje";
import { useState, useEffect, useRef } from "react";
import GaleryItem from "../Galery/GaleryItem";
import Footer from "../Footer/Footer";
import Contacto from "../Contacto/Contacto";
import TrabajosPracticos from "../Galery/Proyects/TrabajosPracticos";
import LibroDeArtista from "../Galery/Proyects/LibrodeArtista";
import { Galery } from "../Galery/Galery";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

export const HomeScreen = () => {
  const [showImage, setShowImage] = useState(false);
  const [photoSrc, setPhotoSrc] = useState("");
  const [photoId, setPhotoId] = useState();
  const [data, setData] = useState([]);
  const [selectedButton, setSelectedButton] = useState("fotorreportaje");

  const [showFotoReportaje, setShowFotoReportaje] = useState(true);
  const [showTrabajosPracticos, setShowTrabajosPracticos] = useState(false);
  const [showLibroDeArtista, setShowLibroDeArtista] = useState(false);
  const [showArchivo, setShowArchivo] = useState(false);

  const location = useLocation();
  const bioSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#seccion-biography" && bioSectionRef.current) {
      bioSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (location.hash === "#seccion-projects" && projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (location.hash === "#seccion-contact" && contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleButtonClick = (buttonName) => {
    setShowImage(false);
    switch (buttonName) {
      case "fotorreportaje":
        setShowFotoReportaje(true);
        setShowTrabajosPracticos(false);
        setShowLibroDeArtista(false);
        setShowArchivo(false);
        setSelectedButton("fotorreportaje");
        break;
      case "trabajosPracticos":
        setShowFotoReportaje(false);
        setShowTrabajosPracticos(true);
        setShowLibroDeArtista(false);
        setShowArchivo(false);
        setSelectedButton("trabajosPracticos");
        break;
      case "libroDeArtista":
        setShowFotoReportaje(false);
        setShowTrabajosPracticos(false);
        setShowLibroDeArtista(true);
        setShowArchivo(false);
        setSelectedButton("libroDeArtista");
        break;
      case "archivo":
        setShowFotoReportaje(false);
        setShowTrabajosPracticos(false);
        setShowLibroDeArtista(false);
        setShowArchivo(true);
        break;
      default:
        setShowFotoReportaje(true);
        setShowTrabajosPracticos(false);
        setShowLibroDeArtista(false);
        setShowArchivo(false);
    }
  };

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
      <div className="hero"></div>
      <div className="title-box">
        <h1>Alexis Fernández</h1>
        <p>
          «No haces fotografía sólo con la cámara. La haces con todas las
          imágenes que has visto, con todos los libros que has leído, con toda
          la música que has escuchado, y con toda la gente a la que has amado»
          Ansel Adams
        </p>
      </div>
      <div
        className="biogrphy-container"
        id="seccion-biography"
        style={{ position: "relative", marginTop: "56px" }}
        ref={bioSectionRef}
      >
        <Biography />
      </div>
      <div
        className="GaleryContainer"
        id="seccion-projects"
        ref={projectsSectionRef}
      >
        <div className="buttonContainer">
          <Button
            sx={{
              backgroundColor:
                selectedButton === "fotorreportaje" ? "contained" : "black",
            }}
            variant="contained"
            name="Futsal"
            onClick={() => handleButtonClick("fotorreportaje")}
          >
            Fotorreportaje
          </Button>
          <Button
            sx={{
              backgroundColor:
                selectedButton === "trabajosPracticos" ? "contained" : "black",
            }}
            variant="contained"
            name="Futsal"
            onClick={() => handleButtonClick("trabajosPracticos")}
          >
            Trabajos Prácticos
          </Button>
          <Button
            sx={{
              backgroundColor:
                selectedButton === "libroDeArtista" ? "contained" : "black",
            }}
            variant="contained"
            name="Futsal"
            onClick={() => handleButtonClick("libroDeArtista")}
          >
            Libro de Artista
          </Button>
        </div>
        {!showImage ? (
          showFotoReportaje ? (
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
          ) : showTrabajosPracticos ? (
            <TrabajosPracticos
              handleClick={handleClick}
              showImage={showImage}
              setShowImage={setShowImage}
              setPhotoSrc={setPhotoSrc}
              photoId={photoId}
              setData={setData}
              data={data}
            />
          ) : showLibroDeArtista ? (
            <LibroDeArtista
              handleClick={handleClick}
              showImage={showImage}
              setShowImage={setShowImage}
              setPhotoSrc={setPhotoSrc}
              photoId={photoId}
              setData={setData}
              data={data}
            />
          ) : showArchivo ? (
            <Galery
              handleClick={handleClick}
              showImage={showImage}
              setShowImage={setShowImage}
              setPhotoSrc={setPhotoSrc}
              photoId={photoId}
              setData={setData}
              data={data}
            />
          ) : null
        ) : (
          <GaleryItem
            photoSrc={photoSrc}
            setPhotoSrc={setPhotoSrc}
            setShowImage={setShowImage}
            setPhotoId={setPhotoId}
            photoId={photoId}
            data={data}
          />
        )}
      </div>
      <div id="seccion-contact" ref={contactSectionRef}>
        <Contacto />
      </div>

      <Footer />
    </>
  );
};

export default HomeScreen;

import React from "react";
import "./galery.css";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
// import Footer from "../Footer/Footer";

export const GaleryItem = ({ photoSrc, setShowImage, setPhotoId, photoId, data }) => {
  const handleClose = () => {
    setShowImage(false);
  };

  const nextPhoto = () => {
    photoId !== data.length
      ? setPhotoId((photoId) => parseInt(photoId) + 1)
      : setPhotoId(1);
  };

  const PreviousPhoto = () => {
    photoId !== 1
      ? setPhotoId((photoId) => parseInt(photoId) - 1)
      : setPhotoId(data.length);
  };

  useEffect(() => {
    setPhotoId((photoId) => parseInt(photoId));
  }, [setPhotoId]);

  return (
    <>
        <div></div>
        <div className="galery-item-background"></div>
      <div style={{ position: "relative" }}>
        <div className="imageContainer"></div>
        <div
          style={{
            backgroundImage: `url(${photoSrc})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            height: "85vh",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            marginTop: '-30px',
          }}
        ></div>
        <div style={{ position: "absolute", left: "85%", top: 0 }}>
          <IconButton onClick={handleClose}>
            {
              <CloseIcon
                sx={{ width: "30px", height: "30px", color: "white" }}
              />
            }
          </IconButton>
        </div>
        <div style={{ position: "absolute", right: "85%", top: "50%" }}>
          <IconButton onClick={PreviousPhoto}>
            {
              <ChevronLeftIcon
                sx={{ width: "30px", height: "30px", color: "white" }}
              />
            }
          </IconButton>
        </div>
        <div style={{ position: "absolute", left: "85%", top: "50%" }}>
          <IconButton onClick={nextPhoto}>
            {
              <ChevronRightIcon
                sx={{ width: "30px", height: "30px", color: "white" }}
              />
            }
          </IconButton>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default GaleryItem;

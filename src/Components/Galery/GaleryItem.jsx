import React from "react";
import "./galery.css";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

const GaleryItem = ({ photoSrc, setShowImage, setPhotoId, photoId }) => {
  const handleClose = () => {
    setShowImage(false);
  };

  const nextPhoto = () => {
    photoId !== 12
      ? setPhotoId((photoId) => parseInt(photoId) + 1)
      : setPhotoId(1);
  };

  const PreviousPhoto = () => {
    photoId !== 1
      ? setPhotoId((photoId) => parseInt(photoId) - 1)
      : setPhotoId(12);
  };

  useEffect(() => {
    setPhotoId((photoId) => parseInt(photoId));
  }, [setPhotoId]);

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="imageContainer"></div>
        <img
          className="singleImage"
          width={"80%"}
          src={photoSrc}
          alt={"Prueba"}
          loading="lazy"
        />
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
    </>
  );
};

export default GaleryItem;

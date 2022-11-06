import React from "react";
import "./galery.css";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";

const GaleryItem = ({
  photoSrc,
  setPhotoSrc,
  setShowImage,
  setPhotoId,
  photoId,
}) => {
  console.log(photoSrc, "en galeryItem");

  console.log(photoId, "id en galeryItem");

  const handleClose = () => {
    setShowImage(false);
  };

  const nextPhoto = () => {
    setPhotoId((photoId) => parseInt(photoId) + 1);
  };

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <img
          style={{ position: "absolute", right: "12%" }}
          className="singleImage"
          width={"80%"}
          src={photoSrc}
          alt={"Prueba"}
          loading="lazy"
        />
        <div style={{ position: "absolute", left: "83%" }}>
          <IconButton onClick={handleClose}>{<CloseIcon />}</IconButton>
        </div>
      </div>
      <button onClick={nextPhoto}>Next</button>
    </>
  );
};

export default GaleryItem;

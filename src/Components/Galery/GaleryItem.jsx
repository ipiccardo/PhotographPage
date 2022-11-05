import React from "react";

const GaleryItem = ({ photoId }) => {
  console.log(photoId, "en galeryItem");

  return (
    <>
      <img width={"80%"} src={photoId} alt={"Prueba"} loading="lazy" />
    </>
  );
};

export default GaleryItem;

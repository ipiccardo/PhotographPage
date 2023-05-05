import "./galery.css";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
// import Footer from "../Footer/Footer";

export const GaleryItem = ({
  photoSrc,
  setPhotoId,
  photoId,
  data,
  setShowImage,
}) => {
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
          className="image"
          style={{
            backgroundImage: `url(${photoSrc})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            height: "80vh",
            width: "100vw",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="z-index-200"
          style={{ position: "absolute", left: "85%", top: 0 }}
        >
          <IconButton onClick={handleClose}>
            {
              <CloseIcon
                sx={{ width: "30px", height: "30px", color: "white" }}
              />
            }
          </IconButton>
        </div>
        <div
          className="z-index-200"
          style={{ position: "absolute", right: "85%", top: "50%" }}
        >
          <IconButton onClick={PreviousPhoto}>
            {
              <ChevronLeftIcon
                sx={{ width: "30px", height: "30px", color: "white" }}
              />
            }
          </IconButton>
        </div>
        <div
          className="z-index-200"
          style={{
            position: "absolute",
            left: "85%",
            top: "50%",
            zIndex: "z-index: 200",
          }}
        >
          <IconButton onClick={nextPhoto}>
            {
              <ChevronRightIcon
                sx={{ width: "30px", height: "30px", color: "white" }}
              />
            }
          </IconButton>
        </div>
      </div>

      <div className="container-description">
        {data.map(({ description, id }) => {
          return <p className="description">{id === photoId && description}</p>;
        })}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default GaleryItem;

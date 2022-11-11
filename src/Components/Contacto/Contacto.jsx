import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faE, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./contacto.css";

export const Contacto = () => {
  return (
    <>
      <h1>CONTACTO</h1>
      <div className="social-media-container" style={{ fontSize: "4em" }}>
        <a
            rel="noreferrer"
            href="https://instagram.com/chinofernandezph?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
        <FontAwesomeIcon icon={faInstagram} />
          </a>
        <a
          rel="noreferrer"
          href="https://wa.me/5491144181310"
          target="_blank"
          title="5491144181310"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          rel="noreferrer"
          href="https://mail@gmail.com"
          target="_blank"
          title="mail@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
      </div>
    </>
  );
};

export default Contacto;

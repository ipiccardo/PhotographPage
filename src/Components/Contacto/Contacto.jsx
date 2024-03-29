import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./contacto.css";

export const Contacto = () => {
  return (
    <>
      <div>
        {/* <h1>CONTACTO</h1> */}
        <div className="social-media-container" style={{ fontSize: "4em" }}>
          <div className="maxWidth">
            <div className="social-media-div">
              <span>un_chino</span>
              <a
                className="social-media-links"
                rel="noreferrer"
                href="https://instagram.com/un_chino?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="social-media-div">
              <span>5491144181310</span>
              <a
                className="social-media-links"
                rel="noreferrer"
                href="https://wa.me/5491144181310"
                target="_blank"
                title="5491144181310"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <div className="social-media-div">
              <span>alexisdariofernandez@gmail.com</span>
              <a
                className="social-media-links"
                rel="noreferrer"
                href="https://alexisdariofernandez@gmail.com"
                target="_blank"
                title="alexisdariofernandez@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;

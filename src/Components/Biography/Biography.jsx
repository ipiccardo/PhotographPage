import React from "react";
import "./Biography.css";
import Footer from "../Footer/Footer";

export const Biography = () => {
  return (
    <>
      <div className="biography-box">
        <div className="biography-hero"></div>
        <div className="biography-text">
          <h2>Alexis Darío Fernández (Buenos Aires, 1985). Fotógrafo.</h2>
          <p>
            Su acercamiento a la fotografía comienza concurriendo a talleres de
            la Cooperativa de la Imagen (Buenos Aires, 2014) en el verano de
            2020 y continuando esa exploración durante el confinamiento por la
            pandemia de Covid – 19. Fotografía Básica 1 y 2. Docente Cecilia
            Rossi, Fotografía Documental. Docente Valeria Sestua, Composición y
            mirada de autor. Docente Martina Bertolini.
          </p>
          <p>
            En 2021 inicia su formación como fotoperiodista en la escuela de la
            Asociación de Reporteros Gráficos de la República Argentina (Argra),
            donde al día de hoy continúa asistiendo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;

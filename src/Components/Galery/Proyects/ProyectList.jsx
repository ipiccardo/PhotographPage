import React from "react";
import { Button } from "@mui/material";

const ProyectList = ({ handleProyectChange }) => {
  return (
    <>
      <ul className="listContainer">
        <li>
          <Button
            onClick={handleProyectChange}
            sx={{ backgroundColor: "black" }}
            variant="contained"
            name="tres picos"
          >
            3 Picos
          </Button>
        </li>
        <li>
          <Button
            onClick={handleProyectChange}
            sx={{ backgroundColor: "black" }}
            variant="contained"
            name="Maradona"
          >
            Maradona
          </Button>
        </li>
        <li>
          <Button sx={{ backgroundColor: "black" }} variant="contained" name="Futsal" onClick={handleProyectChange}>
            Futsal
          </Button>
        </li>
        {/* <li>
          <Button sx={{ backgroundColor: "black" }} variant="contained" name='FotoReportaje' onClick={handleProyectChange}>
            Foto Reportaje
          </Button>
        </li>
        <li>
          <Button sx={{ backgroundColor: "black" }} variant="contained" name='LibroDeArtista' onClick={handleProyectChange}>
            Libro de Artista
          </Button>
        </li>
          <li>
          <Button sx={{ backgroundColor: "black" }} variant="contained" name='TrabajosPracticos' onClick={handleProyectChange}>
            Trabajos Prácticos
          </Button>
          </li> */}
      </ul>
    </>
  );
};

export default ProyectList;

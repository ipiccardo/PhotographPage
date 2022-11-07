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
            name="Proyecto Prueba"
          >
            Proyecto 2
          </Button>
        </li>
        <li>
          <Button sx={{ backgroundColor: "black" }} variant="contained">
            Proyecto 3
          </Button>
        </li>
        <li>
          <Button sx={{ backgroundColor: "black" }} variant="contained">
            Proyecto 4
          </Button>
        </li>
        <li>
          <Button sx={{ backgroundColor: "black" }} variant="contained">
            Proyecto 5
          </Button>
        </li>
      </ul>
    </>
  );
};

export default ProyectList;

import NavBar from "./Components/Header/NavBar/NavBar";
import PagesRoute from "./Components/Routes/PagesRoutes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <PagesRoute />
      </BrowserRouter>
    </>
  );
}

export default App;

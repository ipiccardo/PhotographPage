import NavBar from "./Components/Header/NavBar/NavBar";
import PagesRoute from "./Components/Routes/PagesRoutes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <PagesRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

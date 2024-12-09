import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSite from "./components/NavbarSite";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarSite></NavbarSite>
      <HomePage></HomePage>
    </>
  );
}

export default App;

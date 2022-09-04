import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Screens from "./Screen/ScreenIndex";
import NavBar from "./components/NavBar";
import Landing from "./Screen/Landing";
import NavItem from "./components/NavItem";
import categories from "./data/categories.json";
import Boutique from "./Screen/Boutique/Boutique";
import BoutiqueCat from "./Screen/Boutique/BoutiqueCat";
import Footer from "./components/Footer";

function App() {
  const [isCollapse, setCollapse] = useState(false);

  return (
    <>
      <NavBar isCollapse={isCollapse} setCollapse={setCollapse}>
        {categories.map(({ id, title, link }) => (
          <NavItem
            isCollapse={isCollapse}
            setCollapse={setCollapse}
            key={id}
            link={link}
            title={title}
          />
        ))}
        <NavItem link={"Boutique"} title={"Boutique"} />
      </NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        {categories.map(({ id, link }) => (
          <Route key={id} path={`/${link}`} element={Screens[`${link}`]()} />
        ))}
        <Route path="/Boutique" element={<Boutique />}>
          <Route
            path="/Boutique"
            element={<BoutiqueCat title={"Mes Créations"} />}
          />
          <Route
            path="/Boutique/Pinces"
            element={<BoutiqueCat title={"Plumes"} />}
          />
          <Route
            path="/Boutique/Tiares"
            element={<BoutiqueCat title={"Headband"} />}
          />
          <Route
            path="/Boutique/Parrures"
            element={<BoutiqueCat title={"Costumes"} />}
          />
          <Route
            path="/Boutique/Barrettes"
            element={<BoutiqueCat title={"Colliers"} />}
          />
          <Route
            path="/Boutique/Bijoux"
            element={<BoutiqueCat title={"Chaussettes"} />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

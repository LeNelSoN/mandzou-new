import { Route, Routes } from "react-router-dom";
import React from "react";
import Screens from "./Screen/ScreenIndex";
import NavBar from "./components/NavBar";
import Landing from "./Screen/Landing";
import NavItem from "./components/NavItem";
import categories from "./data/categories.json";

function App() {
  return (
    <>
      <NavBar>
        {categories.map(({ id, title, link }) => (
          <NavItem key={id} link={link} title={title} />
        ))}
      </NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        {categories.map(({ id, link }) => (
          <Route
            key={id}
            path={`/${link}.html`}
            element={Screens[`${link}`]()}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;

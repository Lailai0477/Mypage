import React from "react";
import { Route, Routes } from "react-router-dom";
import Top from "./components/Top";
import Links from "./components/Links";
import Works from "./components/Works";
import Otomodachi from "./components/Otomodachi"
import Loseface from "./components/Loseface";

const App: React.FC = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Top />} />
    <Route path="/links" element={<Links />} />
    <Route path="/works" element={<Works />} />
    <Route path="/otomodachi" element={<Otomodachi />} />
    <Route path="/loseface" element={<Loseface />} />
    </Routes>
    </>
  )
}

export default App;

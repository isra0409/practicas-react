import { Navbar } from "../../ui/components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { DcPage } from "../../heroes/pages/DcPage";
import { MarvelPage } from "../../heroes/pages/MarvelPage";
import { HeroPage } from "../../heroes/pages/HeroPage";
import { SearchPage } from "../../heroes/pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dc" element={<DcPage />} />
        <Route path="/marvel" element={<MarvelPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/hero" element={<HeroPage />} />

        {/* si la ruta por default es "/" seteamos en el navigate a donde queremos reedirigir */}
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

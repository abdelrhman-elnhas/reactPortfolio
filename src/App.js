import { Route, Routes } from "react-router-dom";
import FullPortfolio from "./pages/FullPortfolio";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects" element={<FullPortfolio />} />
    </Routes>
  );
}

export default App;

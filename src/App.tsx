import "./App.css";

//imports for page routing
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";
import NoPage from "./pages/Nopage.tsx";
import { AppContext, data } from "./AppContext.ts";

function App() {
  return (
    <AppContext.Provider value={data}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

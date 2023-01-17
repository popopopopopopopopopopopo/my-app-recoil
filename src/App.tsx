import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<p>Page not found.</p>} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;

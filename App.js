import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<h2>404 error:page not found</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

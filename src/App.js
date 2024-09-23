// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import Settings from "./pages/setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/recipes" element={<Recipes></Recipes>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;

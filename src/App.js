
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Movies } from "./components/pages/Movies";
import { Login } from "./components/pages/Login";
import { Signup } from "./components/pages/Signup";
import Footer from "./components/Footer";
import Details from "./components/pages/Details";
import Book from "./components/pages/Book";


function App() {
  return (
    <>
      <Router>
        <div className="pages">
        <NavBar />

          <Routes>
            <Route exact path="/" element={<Home/>}/> <Route/>
            <Route path="/movies" element={<Movies/>} /> <Route/>
            <Route path="/login" element={<Login/>} /> <Route/>
            <Route path="/signup" element={<Signup/>} /> <Route/>
            <Route path="/book" element={<Book/>} /> <Route/>
            <Route path="/findbyid/:movieid" element={<Details/>} /> <Route/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './allComponents/Header';
import HelloWorld from './allComponents/HelloWorld';
import Home from './allComponents/Home';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HelloWorld" element={<HelloWorld />} />
      </Routes>
    </Router>

  );
}


export default App;

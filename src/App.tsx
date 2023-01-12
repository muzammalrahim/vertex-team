import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Home";
import Quote from "./Quote";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </React.StrictMode>
      <Footer />
    </Router>
  );
}

export default App;

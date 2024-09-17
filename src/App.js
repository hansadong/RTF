import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginView from "./components/Login/LoginView";
import React from "react";

function App() {
  return (
      /*
      <Router>
          <div className="App">
            <Nav />
            <Header />
            <Body />
            <Footer />
          </div>

          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<LoginView />}/>
          </Routes>
      </Router>
       */
      <div className="App">
          <Nav/>
          <Header/>
          <Body/>
          <Footer/>
      </div>
  );
}

export default App;
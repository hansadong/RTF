import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function AppHomePage() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppHomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
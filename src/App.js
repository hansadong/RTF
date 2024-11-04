import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import LoginView from "./components/login/LoginView";
import SignUpView from "./components/login/SignUpView";
import MyPage from "./components/mypage/MyPage";

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
                <Route path="/signup" element={<SignUpView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/mypage" element={<MyPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

function Nav() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const logout = () => {
        const logoutConfirm = window.confirm('로그아웃 하시겠습니까?');
        if (logoutConfirm) {
            Cookies.remove('token'); // 쿠키에서 토큰 제거
            setIsAuthenticated(false);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">레시피탭</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#!">메뉴</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">레시피 목록</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        {isAuthenticated ? (
                            <CSSTransition
                                in={isAuthenticated}
                                timeout={300}
                                classNames="fade"
                                unmountOnExit
                            >
                                <React.Fragment>
                                <Link to="/mypage">
                                    <button className="btn btn-warning btn-right" type="button">
                                        MyPage
                                    </button>
                                </Link>
                                <button className="btn btn-dark" type="button" onClick={logout}>
                                    Logout
                                </button>
                                </React.Fragment>
                            </CSSTransition>
                        ) : (
                            <React.Fragment>
                            <Link to="/signup">
                                <button className="btn btn-primary btn-right" type="submit">
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="btn btn-dark" type="submit">
                                    Login
                                </button>
                            </Link>
                            </React.Fragment>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
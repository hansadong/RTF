import React from 'react';

function Header() {
    return (
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">당신이 찾는 레시피 여기에!</h1>
                    <p className="lead fw-normal text-white-50 mb-0">레시피탭과 함께하세요</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
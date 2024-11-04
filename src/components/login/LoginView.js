import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";

const setCookie = (name, value, options = {}) => {
    Cookies.set(name, value, { expires: 1 });
    console.log(`${name} 쿠키가 설정되었습니다: ${value}`);
};

const getCookie = (name) => {
    const value = Cookies.get(name);
    if (value) {
        console.log(`${name} 쿠키의 값은: ${value}`);
    } else {
        console.log(`${name} 쿠키가 존재하지 않습니다.`);
    }
    return value;
};

function LoginFormSubmitComponent() {
    const [memberId, setMemberId] = useState('');
    const [memberPwd, setMemberPwd] = useState('');
    const navigate = useNavigate();

    const handleLoginClick = async () => {
        try {
            const response = await axios.post(
                'http://api.recipetab.shop/api/auth/login',
                {memberId, memberPwd},
                // {withCredentials: true},
                {
                    headers: {
                        'Content-Type':
                            'multipart/form-data'
                    }
                }
            );

            // 로그인 성공 시
            if (response.status === 200) {
                setCookie('token', response.data.accessToken);
                navigate(-1);
            }
        } catch (error) {
            if (error.response.status === 401) {
                alert('아이디와 비밀번호를 다시 한번 확인해 주세요!');
            }
        } finally {

        }
    };
    return (
        <section className="bg-light py-5">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                        className="bi bi-envelope"></i></div>
                    <h2 className="fw-bolder">레시피탭</h2>
                    <p className="lead mb-0">로그인이 필요합니다!</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberId" type="text" value={memberId}
                                       onChange={(e) => setMemberId(e.target.value)}
                                       data-sb-validations="required"/>
                                <label htmlFor="name">아이디</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">Id is required.
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberPwd" type="password" value={memberPwd}
                                       onChange={(e) => setMemberPwd(e.target.value)}
                                       data-sb-validations="required,memberpwd"/>
                                <label htmlFor="email">비밀번호</label>
                                <div className="invalid-feedback" data-sb-feedback="memberPwd:required">Password is required.
                                </div>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg" id="loginButton"
                                        onClick={handleLoginClick} type="button">로그인
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginFormSubmitComponent;
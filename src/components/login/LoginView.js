import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginClick = async (formData) => {
        setLoading(true);
        try {
            const response = await
                axios.post(
                'http://api.recipetab.shop/api/auth/login',
                    formData,
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
            setLoading(false);
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
                        <form id="contactForm" onSubmit={handleSubmit(handleLoginClick)}>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberId" name="memberId" type="text"
                                       placeholder="아이디"
                                       {...register('memberId', {
                                           required: '아이디를 입력해 주세요.'
                                       })}/>
                                {errors.memberId && <p style={{color: 'red'}}>{errors.memberId.message}</p>}
                                <label htmlFor="memberId">아이디</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberPwd" name="memberPwd" type="password"
                                       placeholder="비밀번호"
                                       {...register('memberPwd', {
                                           required: '비밀번호를 입력해 주세요.'
                                       })}/>
                                {errors.memberPwd && <p style={{color: 'red'}}>{errors.memberPwd.message}</p>}
                                <label htmlFor="memberPwd">비밀번호</label>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg" id="loginButton" type="submit">로그인
                                </button>
                            </div>
                            <div style={styles.container}>
                                {loading && (
                                    <div style={styles.overlay}>
                                        <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading..."
                                             style={styles.loadingImage}/>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    container: {
        position: 'relative',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1000,
    },
    loadingImage: {
        width: '50px',
        height: '50px',
    },
};

export default LoginFormSubmitComponent;
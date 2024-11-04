import React, { useState } from 'react';
import axios from 'axios';
import {redirect, useNavigate} from "react-router-dom";

function SignUpFormSubmitComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        memberId: '',
        memberPwd: '',
        memberEmail: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignUpSubmit = async (event) => {
        event.preventDefault(); // 폼 제출의 기본 동작을 막습니다.
        console.log(formData);
        console.log('폼이 제출되었습니다!');

        setLoading(true);

        try {
            const response = await axios.post
            (
            'http://api.recipetab.shop/api/auth/register',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            setData(response.data);
            if (response.status === 200) {
                alert('회원가입이 완료되었습니다!');
                navigate(-1);
            }
        } catch (error) {
            if (error.response.status === 400) {
                alert('이미 등록된 아이디입니다!');
            }
            setError(error.message);
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
                    <p className="lead mb-0">회원가입 후 레시피탭을 이용해 보세요!</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSignUpSubmit}>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberId" type="text" placeholder="사용할 아이디를 입력해 주세요."
                                       data-sb-validations="required" onChange={handleInputChange} name="memberId" value={formData.memberId}/>
                                <label htmlFor="name">아이디</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberPwd" type="password" placeholder="숫자,영대소문자,특수문자 사용 10~14자리"
                                       data-sb-validations="required" onChange={handleInputChange} name="memberPwd" value={formData.memberPwd}/>
                                <label htmlFor="phone">비밀번호</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is
                                    required.
                                </div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br/>
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Error sending message!</div>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg" id="submitButton"
                                        type="submit">회원가입
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUpFormSubmitComponent;
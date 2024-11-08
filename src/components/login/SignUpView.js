import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

function SignUpFormSubmitComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        memberId: '',
        memberPwd: '',
        memberEmail: '',
        nickName: ''
    });
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUpSubmit = async (formData) => {
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
            if (response.status === 200) {
                alert('회원가입이 완료되었습니다!');
                navigate(-1);
            }
            setData(response.data);
        } catch (error) {
            if (error.response.status === 400) {
                alert('이미 등록된 아이디입니다!');
            }
            console.log(error.response.data);
            console.log(error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // if (loading) {
    //     console.log("로딩중");
    //     return (
    //         <div style={styles.container}>
    //             <div style={styles.overlay}>
    //                 <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading..." style={styles.loadingImage} />
    //             </div>
    //         </div>
    //     );
    // }

    if (error) {
        console.log("에러발생");
        setError(error.message + " ERROR TEST");
    }

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
                        <form id="contactForm" onSubmit={handleSubmit(handleSignUpSubmit)}>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberId" name="memberId" type="text"
                                       placeholder="아이디"
                                       {...register('memberId', {
                                           required: '아이디는 필수 입력입니다.',
                                           minLength: {
                                               value: 8,
                                               message: '최소 8자리 이상 입력해 주세요.'
                                           },
                                           maxLength: {
                                               value: 16,
                                               message: '최대 16자리까지 입력 가능합니다.'
                                           },
                                           pattern: {
                                               value: /^(?=.*[a-z])[a-z0-9]+$/,
                                               message: '아이디는 영소문자와 숫자만 사용해 주세요.'
                                           }
                                       })}/>
                                {errors.memberId && <p style={{color: 'red'}}>{errors.memberId.message}</p>}
                                <label htmlFor="memberId">* 아이디</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberPwd" type="password"
                                       placeholder="숫자,영대소문자,특수문자 사용 10~14자리"
                                       data-sb-validations="required" name="memberPwd"
                                       {...register('memberPwd', {
                                           required: '비밀번호는 필수 입력입니다.',
                                           pattern: {
                                               value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                               message: '비밀번호는 최소 8자리 이상, 영대문자/영소문자 1개 이상, 숫자 1개 이상, 특수문자(@$!%*?&) 1개 이상 사용해 주세요.'
                                           }
                                       })}/>
                                {errors.memberPwd && <div style={{color: 'red'}}>{errors.memberPwd.message}</div>}
                                <label htmlFor="memberPwd">* 비밀번호</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="memberEmail" type="text"
                                       placeholder="이메일"
                                       data-sb-validations="required" name="memberEmail"
                                       {...register('memberEmail', {
                                           required: '이메일은 필수 입력입니다.',
                                           pattern: {
                                               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                               message: '이메일 형식에 맞게 입력해 주세요. (ex: Example@example.com)'
                                           }
                                       })}/>
                                {errors.memberEmail && <div style={{color: 'red'}}>{errors.memberEmail.message}</div>}
                                <label htmlFor="memberEmail">* 이메일</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="nickName" type="text"
                                       placeholder="닉네임"
                                       data-sb-validations="required" name="nickName"
                                       {...register('nickName', {
                                           required: '닉네임은 필수 입력입니다.',
                                           pattern: {
                                               value: /^[가-힣]{2,10}$/,
                                               message: '닉네임은 2~10자로 한글로만 입력해 주세요.'
                                           }
                                       })}/>
                                {errors.nickName && <div style={{color: 'red'}}>{errors.nickName.message}</div>}
                                <label htmlFor="nickName">* 닉네임</label>
                            </div>
                            <div className="" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">{error}</div>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg" id="submitButton"
                                        type="submit">회원가입
                                </button>
                            </div>
                            <div style={styles.container}>
                                {loading && (
                                    <div style={styles.overlay}>
                                        <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading..." style={styles.loadingImage} />
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

export default SignUpFormSubmitComponent;
import React from 'react';

function Body() {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="/main-image-kr.jpg" style={{width:"268px", height:"178.66px"}}
                                 alt="..."/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">한식</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="/main-image-usa.jpg" style={{width:"268px", height:"178.66px"}}
                                 alt="..."/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">양식</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="/main-image-jp.jpg" style={{width:"268px", height:"178.66px"}}
                                 alt="..."/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">일식</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="/main-image-cn.jpg" style={{width:"268px", height:"178.66px"}}
                                 alt="..."/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">중식</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="/main-image-bun.jpg" style={{width:"268px", height:"178.66px"}}
                                 alt="..."/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">분식</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="/main-image-etc.jpg" style={{width:"268px", height:"178.66px"}}
                                 alt="..."/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">기타</h5>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;
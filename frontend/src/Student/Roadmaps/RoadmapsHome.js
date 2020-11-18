import React from 'react'
import Base from '../Base';
import { Link } from 'react-router-dom';

const RoadmapsHome = () => {
    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">ROADMAPS</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-12">
                                <h2>Learn new things in ease way</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <Link to="/WebDevelopment">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h4 className="card-title text-uppercase text-muted mb-0">Roadmap for</h4>
                                                    <span className="h2 font-weight-bold mb-0 text-dark">Web Development</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="mycard card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4 className="card-title text-uppercase text-muted mb-0">Roadmap for</h4>
                                                <span className="h2 font-weight-bold mb-0">Competitive Programming</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="mycard card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4 className="card-title text-uppercase text-muted mb-0">Roadmap for</h4>
                                                <span className="h2 font-weight-bold mb-0">Mobile Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-3">
                                <div className="mycard card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4 className="card-title text-uppercase text-muted mb-0">Roadmap for</h4>
                                                <span className="h2 font-weight-bold mb-0">Machine Learning</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-3">
                                <div className="mycard card-stats">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4 className="card-title text-uppercase text-muted mb-0">Roadmap for</h4>
                                                <span className="h2 font-weight-bold mb-0">IOT Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default RoadmapsHome;
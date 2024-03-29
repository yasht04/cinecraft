import React from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NAvbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black well" id='navbar' style={{
                position: "sticky",
                top: "0",
                zIndex: "100"
            }}>
                <div className="container-fluid">
                    <FontAwesomeIcon icon={faBars} bounce style={{
                        color: "black"
                    }} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                    <img className="nav-img" src={logo} alt="logo" srcset="" />
                    <div className="site-title" style={{
                        marginRight: "50px"
                    }} >
                        <a href="/">
                        CineCraft
                            </a>    
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ull" style={{
                            fontSize: "large"
                        }} >
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="/" style={{
                                    color: "black",
                                    fontSize: '22px'
                                }} >Home</a>
                            </li>
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="#about" style={{
                                    color: "black",
                                    fontSize: '22px'
                                }} >About Us</a>
                            </li>
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="#courses" style={{
                                    color: "black",
                                    fontSize: '22px'

                                }}  >Courses</a>
                            </li>
                            <li className="nav-item" style={{
                                fontSize: "large"
                            }}  >
                                <a className="nav-link active" aria-current="page" href="#Footer" style={{
                                    color: "black",
                                    fontSize: '22px'
                                }}  >Connect </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default NAvbar;
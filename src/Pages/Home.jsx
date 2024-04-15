import React from 'react'
import Button from 'react-bootstrap/Button';
import home from "../images/home.jpg";
import styled from 'styled-components';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
const Home = () => {

    const StyledSignInButton = styled(SignInButton)`
  padding: 12px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
`;
    return (
        <>
            <div className="home" id='home'>
                <div className="container ">

                    <div className="homeabout">
                        <div className="hpara">
                            <h1 style={{
                                paddingTop: "20px",
                                paddingBottom: "20px"
                            }} >CineCraft</h1>
                            <div className="para">
                                <h4>
                                    Check out the best site to learn Cinematography,
                                    Movie Making and Screenplay Writing where learning is made easy with
                                    our courses
                                </h4>
                            </div>
                            <div className="buttons">
                                <div className="button">
                                    <a href="#courses">
                                        <Button className="btn btn-primary btn4" style={{
                                            backgroundColor: "#FF5F1F",
                                            color: "white",
                                            fontSize: "16px",
                                            border: "none",
                                            height: "44px",
                                            width: "125px"
                                        }} >View Courses</Button>
                                    </a>
                                </div>
                                <div className="button p-10 ">
                                <SignedOut>
                                        <StyledSignInButton className="btn4" style={{backgroundColor: "#FF5F1F",border: "none",display: "flex",borderRadius: "8px"}}/>
                                </SignedOut>
                                    <SignedIn>
                                        <UserButton className="btn4" style={{backgroundColor: "#FF5F1F",border: "none" ,display: "flex",borderRadius: "8px"}} />
                                    </SignedIn>
                                </div>
                            </div>
                        </div>
                        <div className="home-img">
                            <img src={home} alt="home image"  />
                        </div>
                    </div>

                </div>
                
            </div>
            
        </>
    )
}
export default Home;
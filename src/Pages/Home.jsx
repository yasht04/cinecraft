import React from 'react'
import Button from 'react-bootstrap/Button';
import home from "../images/home.jpg";
import styled from 'styled-components';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
const Home = () => {

    const StyledSignInButton = styled(SignInButton)`
  background-color: Blue;
  border: none;
  color: white;
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
                                    Movie Making and Screenplay Writing where learning is made easy with
                                    our courses
                                </h4>
                            </div>
                            <div className="buttons">
                                <div className="button">
                                    <a href="#courses">
                                        <Button style={{
                                            backgroundColor: "White",
                                            color: "Blue",
                                            fontSize: "larger"
                                        }} >View Courses</Button>
                                    </a>
                                </div>
                                <div className="button p-10 ">
                                <SignedOut>
                                        <StyledSignInButton />
                                </SignedOut>
                                    <SignedIn>
                                        <UserButton  />
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
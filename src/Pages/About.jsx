import React from 'react'
import about from "../images/about.jpg";
export default function About() {

    return (
        <>
            <div className="container" id='about' >
                <h1 style={{
                    textAlign: "center",
                    paddingTop: "45px"
                }} className='head'>About Us </h1>
                <div className="about">
                    <div className="ab-img">
                        <img className='about-pic' src={about} alt="" srcset="" />
                    </div>
                <p className='about-us' id='color-mix' style={{
                    
                }} >
                    <h5>
                            Cinecraft is a collaborative platform led by experienced filmmakers and
                            cinematographers with over 5 years of industry expertise. Our mission is
                            to empower aspiring filmmakers by providing valuable insights, tutorials,
                            and resources, fostering a community where creativity flourishes and cinematic
                            art is celebrated. Join Cinecraft for a cinematic adventure and explore the
                            transformative power of storytelling in the world of filmmaking.
                    </h5>
                </p>
                
                </div>
            </div>
        </>
    )
}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
export default function Foter() {

    return (
        <>
            <div className="" >
                <div className="main-foot bg-dark " id='Footer' >
                    <div className="footer" >
                        <ul>
                            <div className="facebook">
                                <a href="https://www.facebook.com/people/Cine-Craft/pfbid02gmGcaZpqCaAp6okesj8KyBRcFTB2Po6fcTp8iXV72FfFcW8c1qBxXpkxXh9wFBBDl/?mibextid=ZbWKwL">
                                    <FontAwesomeIcon className='gmail' icon={faFacebook} beatFade />
                                </a>
                            </div>
                            <div className="insta">
                                <a href="https://www.instagram.com/cinecraft_007">
                                    <FontAwesomeIcon className='gmail' icon={faInstagram} beatFade />
                                </a>
                            </div>
                            <div className="gmaild">
                                <a href="https://twitter.com/Cinecraft_007">
                                    <FontAwesomeIcon className='gmail' icon={faXTwitter} beatFade />
                                </a>
                            </div>

                        </ul>
                    </div>
                    <div className="foot-about">
                        <h2>CineCraft </h2>
                    </div>
                    <div className="bMenu">
                        <ul className='bMList'>
                            <a className="nav-link active" href="#home" >Home</a>
                            <a className="nav-link active" aria-current="page" href="#about" >About Us</a>
                            <a className="nav-link active" aria-current="page" href="#courses">Courses</a>
                        </ul>
                    </div>
                    
                </div>
                <div className='bg-dark text-white flex flex-wrap' style={{textAlign:"center",paddingRight:"70px"}}>© Cinecraft 2024</div>
            </div>
        </>
    )
}

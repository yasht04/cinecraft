import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movie from '../images/cine.jpg';
import story from '../images/story.jpg';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
const Course = () => {
    return (
        <>
            <div className="phead" id="courses">
                <h1 style={{
                    textAlign:"center" 
                }}>Courses</h1>
            </div>
           <div className="main flex flex-wrap" >
            <div className="card1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{
                            height: "170px"
                        }} variant="top" src="https://pbblogassets.s3.amazonaws.com/uploads/2015/11/Cinematography-Manual.jpg" />
                        <Card.Body>
                            <Card.Title>Cinematography</Card.Title>
                            <Card.Text>
                            Cinematography is the art of capturing images in films. It involves camera work, lighting, composition, and movement to tell stories visually. Cinematographers work with directors to create the desired look and feel of a movie.
                            </Card.Text>
                            <Link to= "/Cinematography" >
                                <Button className="btn btn-primary btn1" style={{backgroundColor: "#FF5F1F",border: "none" ,display: "flex"}}>View Course</Button>
                            </Link>
                        </Card.Body>
                    </Card>
            </div>
            <div className="card2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{
                            height: "170px"
                        }} variant="top" src={story} />
                        <Card.Body>
                            <Card.Title>Screenplay Writing</Card.Title>
                            <Card.Text>
                            Screenplay writing is crafting scripts for films or TV shows, including dialogue, scenes, and action descriptions. It requires a strong grasp of storytelling, character development, and structure.
                            </Card.Text>
                            <Link to= "/screenplay">
                                <Button className="btn btn-primary btn2" style={{backgroundColor: "#FF5F1F",border: "none" ,display: "flex"}}>View Course</Button>
                            </Link>
                            
                        </Card.Body>
                    </Card>
            </div>
            <div className="card3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{
                            height: "170px"
                        }} variant="top" src={movie} />
                        <Card.Body>
                            <Card.Title>Movie Making</Card.Title>
                            <Card.Text>
                            Movie making involves developing ideas, writing scripts, filming scenes, editing, and distributing the final product. It requires collaboration among directors, producers, cast, and crew to bring stories to life on screen.
                            </Card.Text>
                            <Link to= "/moviemaking">
                                <Button className="btn btn-primary btn3" style={{backgroundColor: "#FF5F1F",border: "none" ,display: "flex"}}>View Course</Button>
                            </Link>
                        </Card.Body>
                    </Card>
            </div>
           </div>
           <div className="conatiner">
                <h2 className="text-center pt-5 pb-5 phead ">Frequently asked Questions </h2>
            <div className="acord">
                    <Accordion defaultActiveKey="0"  >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <b>Why should I learn from here</b> </Accordion.Header>
                            <Accordion.Body>
                                1.)Comprehensive Content  <br />
                                2.)Interactive Learning Experience: The course also contains images which will help in understanding the conecepts better. <br />                         
                                3.)Flexible Learning Schedule: As the content is already present on the website so the learner can learn at its own speed. <br />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> <b>Is the content created by experienced proffesionals</b> </Accordion.Header>
                            <Accordion.Body>
                                Experienced Instructors: The content is created by experienced Proffesionals.  <br />   
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <b>Real-world Applications</b> </Accordion.Header>
                            <Accordion.Body>
                               The course is created in such a way that the learner gets to know how what the real world is like <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
            </div>
           </div>
        </>
    )
}
export default Course;
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
} from '@chakra-ui/react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

 export default function CineLinks () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate();
    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Course Content</DrawerHeader>
                    <DrawerBody>
                        <h4>
                            <a href="">
                                Introduction
                            </a>
                            <br />
                            <br />
                            <a href="#toolbox">
                                The Cinematographer's Toolbox
                            </a>
                            <br />
                            <br />
                            <a href="#fundamentals">
                                Fundamentals of Light and Camera
                            </a>
                            <br />
                            <br />
                            <a href="#cameramagic">
                                Camera Magic
                            </a>
                            <br />
                            <br />
                            <a href="#movingPictures">
                                Moving Pictures
                            </a>
                            <br />
                            <br />
                            <a href="#composition">
                                Visual Harmony
                            </a>
                            <br />
                            <br />
                            <a href="#shotSize">
                                Shot Size and Meaning
                            </a>
                            <br />
                            <br />
                            <a href="#powerThrough">
                                Power through Perspective
                            </a>
                            <br />
                            <br />
                            <a href="#lightningTechniques">
                                Lighting Techniques

                            </a>
                            <br />
                            <br />
                            <a href="#masteringNaturalLight">
                                Mastering Natural Light in Cinematography
                            </a>
                            <br />
                            <br />
                            <a href="#advancedLightining">
                                Advanced Lighting Techniques in Cinematography
                            </a>
                            <br />
                            <br />
                            <a href="#colorTheory">
                                Color Theory and grading
                            </a>
                            <br />
                            <br />
                            <a href="#gradingImpact">
                                Grading for Impact
                            </a>
                            <br />
                            <br />
                            <a href="#caseStudy">
                                Case Study
                            </a>
                            <br />
                            <br />
                            <a href="#artOfVisual">
                                The Art of Visual Storytelling
                            </a>
                            <br />
                            <br />
                            <Button style={{
                                backgroundColor: "White",
                                color: "Blue",
                                fontSize: "20px"
                            }} onClick={() => navigate('/')} >Home page</Button>
                        </h4>
                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

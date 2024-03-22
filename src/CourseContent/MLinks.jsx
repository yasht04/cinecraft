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

export default function MovieLinks () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate();

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Topic Names
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
                            <a href="#Intro">
                                Introduction
                            </a>
                            <br />
                            <br />
                            <a href="#Choosing">
                                Choosing Software
                            </a>
                            <br />
                            <br />
                            <a href="#Exploring">
                                Advanced Techniques
                            </a>
                            <br />
                            <br />
                            <a href="#Project Studies">
                                Project Studies
                            </a>
                            <br />
                            <br />
                            <a href="#Editing">
                                Editing Choices
                            </a>
                            <br />
                            <br />
                            <a href="# Documentary-Editing">
                                Documentary Editing
                            </a>
                            <br />
                            <br />
                            <a href="#Documentary-Citizenfour">
                                Documentary Citizenfour
                            </a>
                            <br />
                            <br />
                            <a href="#Software-Specific">
                                Software-Specific
                            </a>
                            <br />
                            <br />
                            <a href="#Polishing">
                                Polishing
                            </a>
                            <br />
                            <br />
                            <a href="#Conclusion">
                                Conclusion
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

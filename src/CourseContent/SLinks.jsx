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


export default function SLinks() {
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
                          <a href="#Storytelling">
                              Storytelling Power
                          </a>
                          <br />
                          <br />
                          <a href="#Screenwriting">
                              Story Foundations
                          </a>
                          <br />
                          <br />
                          <a href="#Character">
                              Character Development
                          </a>
                          <br />
                          <br />
                          <a href="#Plot">
                              Plot Structure in Screenwriting
                          </a>
                          <br />
                          <br />
                          <a href="#Conflict">
                              Conflict and Tension
                          </a>
                          <br />
                          <br />
                          <a href="#Anatomy">
                              Scenecraft and Dialogue
                          </a>
                          <br />
                          <br />
                          <a href="#Dialogue">
                              Dialogue for Purpose
                          </a>
                          <br />
                          <br />
                          <a href="#Subtext">
                              Subtext and Show,
                          </a>
                          <br />
                          <br />
                          <a href="#Hooking">
                              Hooking the Reader
                          </a>
                          <br />
                          <br />
                          <a href="#ThreeAct">
                              The Three-Act Structure
                          </a>
                          <br />
                          <br />
                          <a href="#sceneHeadings">
                              Scene Headings
                          </a>
                          <br />
                          <br />
                          <a href="#DialogueFormatting">
                              Dialogue Formatting
                          </a>
                          <br />
                          <br />
                          <a href="#PageCount">
                              Page Count and Pacing
                          </a>
                          <br />
                          <br />
                          <a href="#Feedback">
                              Revision and Refinement
                          </a>
                          <br />
                          <br />
                          <a href="#SelfEvaluation">
                              Self-Evaluation Tools
                          </a>
                          <br />
                          <br />
                          <a href="#Genre">
                              Genre Conventions
                          </a>
                          <br />
                          <br />
                          <a href="#NavigatingOriginality">
                              Navigating Originality
                          </a>
                          <br />
                          <br />
                          <a href="#AnalyzingCraft">
                              Analyzing the Craft
                          </a>
                          <br />
                          <br />
                          <a href="#Script">
                              Beyond Script
                          </a>
                          <br />
                          <br />
                          <a href="#Recap">
                              Recap
                          </a>
                          <br />
                          <br />
                          <a href="#resources">
                              Resources
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

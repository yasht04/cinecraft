import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import { RedirectToSignIn } from "@clerk/clerk-react";
const Quiz = () => {
  const questions = [
    {
      questionText: "A close-up shot focuses on what part of the subject?",
      answerOptions: [
        { answerText: "Entire body", isCorrect: false },
        { answerText: "Face", isCorrect: true },
        { answerText: "Hands and feet", isCorrect: false },
        { answerText: "Background", isCorrect: false }
      ]
    },
    {
      questionText: "Which lighting technique creates dramatic shadows?",
      answerOptions: [
        { answerText: "Soft light", isCorrect: false },
        { answerText: "High-key lighting", isCorrect: false },
        { answerText: "Low-key lighting", isCorrect: true },
        { answerText: "Backlighting", isCorrect: false }
      ]
    },
    {
      questionText: "The path an actor takes during a scene is called:",
      answerOptions: [
        { answerText: "Trajectory", isCorrect: false },
        { answerText: "Blocking", isCorrect: true },
        { answerText: "Focus pull", isCorrect: false },
        { answerText: "Dolly track", isCorrect: false }
      ]
    },
    {
      questionText: "What camera movement simulates the character's point of view?",
      answerOptions: [
        { answerText: "Pan", isCorrect: false },
        { answerText: "Tilt", isCorrect: false },
        { answerText: "Track", isCorrect: false },
        { answerText: "Handheld", isCorrect: true }
      ]
    },
    {
      questionText: "What is the term for the speed at which frames are captured on film (e.g., 24 fps)?",
      answerOptions: [
        { answerText: "Shutter speed", isCorrect: false },
        { answerText: "Frame rate", isCorrect: true },
        { answerText: "Aperture", isCorrect: false },
        { answerText: "ISO", isCorrect: false }
      ]
    },
    {
      questionText: "What device controls the amount of light entering the camera lens?",
      answerOptions: [
        { answerText: "Filter", isCorrect: false },
        { answerText: "Aperture", isCorrect: true },
        { answerText: "Focus ring", isCorrect: false },
        { answerText: "Zoom lens", isCorrect: false }
      ]
    },
    {
      questionText: "What is the name for a blurred background behind a subject in focus?",
      answerOptions: [
        { answerText: "Bokeh", isCorrect: true },
        { answerText: "Depth of field", isCorrect: false },
        { answerText: "Focus pull", isCorrect: false },
        { answerText: "Rack focus", isCorrect: false }
      ]
    },
    {
      questionText: "A dolly supports the camera, while a track allows it to move:",
      answerOptions: [
        { answerText: "Vertically", isCorrect: false },
        { answerText: "Horizontally", isCorrect: true },
        { answerText: "Closer or farther from the subject", isCorrect: false },
        { answerText: "In any direction", isCorrect: false }
      ]
    },
    {
      questionText: "High-angle shots position the camera:",
      answerOptions: [
        { answerText: "Below the eye line", isCorrect: false },
        { answerText: "Level with the subject", isCorrect: false },
        { answerText: "Above the eye line", isCorrect: true },
        { answerText: "It depends on the lens used", isCorrect: false }
      ]
    },
    {
      questionText: "Three-point lighting typically uses:",
      answerOptions: [
        { answerText: "One key light and two soft lights", isCorrect: true },
        { answerText: "A single powerful light", isCorrect: false },
        { answerText: "Backlighting and fill light", isCorrect: false },
        { answerText: "All of the above", isCorrect: false }
      ]
    },
    {
      questionText: "What is the industry-standard format for screenplays?",
      answerOptions: [
        { answerText: "Novel format", isCorrect: false },
        { answerText: "Short story format", isCorrect: false },
        { answerText: "Screenplay format (e.g., Courier font, 12pt)", isCorrect: true },
        { answerText: "Blog post format", isCorrect: false }
      ]
    },
    {
      questionText: "What is the basic unit of a screenplay that describes a visual element?",
      answerOptions: [
        { answerText: "Chapter", isCorrect: false },
        { answerText: "Paragraph", isCorrect: false },
        { answerText: "Scene", isCorrect: true },
        { answerText: "Line", isCorrect: false }
      ]
    },
    {
      questionText: "What is the purpose of a logline?",
      answerOptions: [
        { answerText: "To summarize the entire plot of the screenplay", isCorrect: false },
        { answerText: "To provide a concise and catchy one-sentence overview of the story", isCorrect: true },
        { answerText: "To introduce the main characters and their motivations", isCorrect: false },
        { answerText: "To outline the themes explored in the screenplay", isCorrect: false }
      ]
    },
    {
      questionText: "What is the difference between dialogue and action lines in a screenplay?",
      answerOptions: [
        { answerText: "Dialogue lines describe what characters say, while action lines describe their actions and the setting", isCorrect: true },
        { answerText: "Dialogue lines are written in bold, while action lines are italicized", isCorrect: false },
        { answerText: "There is no difference; they are used interchangeably", isCorrect: false },
        { answerText: "Dialogue lines summarize conversations, while action lines provide detailed descriptions", isCorrect: false }
      ]
    },
    {
      questionText: "What is the term for revealing a character's true thoughts or feelings through internal monologue?",
      answerOptions: [
        { answerText: "Voiceover", isCorrect: true },
        { answerText: "Exposition", isCorrect: false },
        { answerText: "Subtext", isCorrect: false },
        { answerText: "Internal dialogue", isCorrect: true }
      ]
    },
    {
      questionText: "What is the difference between a protagonist and an antagonist?",
      answerOptions: [
        { answerText: "The protagonist is the good guy, while the antagonist is the bad guy", isCorrect: true },
        { answerText: "The protagonist is the main character, while the antagonist opposes the protagonist", isCorrect: true },
        { answerText: "There is no difference; they are the same term", isCorrect: false },
        { answerText: "The protagonist is the narrator, while the antagonist drives the plot forward", isCorrect: false }
      ]
    },
    {
      questionText: "What is the importance of conflict in a screenplay?",
      answerOptions: [
        { answerText: "To create tension and drama in the story", isCorrect: true },
        { answerText: "To showcase the characters' personalities", isCorrect: true },
        { answerText: "To introduce the setting of the story", isCorrect: false },
        { answerText: "All of the above", isCorrect: true }
      ]
    },
    {
      questionText: "What is the three-act structure commonly used in screenplays?",
      answerOptions: [
        { answerText: "Introduction, climax, resolution", isCorrect: true },
        { answerText: "Exposition, rising action, falling action", isCorrect: true },
        { answerText: "Setup, confrontation, resolution", isCorrect: true },
        { answerText: "All of the above (answers b and c describe the three-act structure)", isCorrect: true }
      ]
    },
    {
      questionText: "What is the role of a slugline in a screenplay?",
      answerOptions: [
        { answerText: "To introduce a new character with a brief description", isCorrect: false },
        { answerText: "To indicate a change in scene, including location and time", isCorrect: true },
        { answerText: "To summarize the emotional state of the characters", isCorrect: false },
        { answerText: "To foreshadow upcoming plot events", isCorrect: false }
      ]
    },
    {
      questionText: "What is the process of rewriting and revising a screenplay to improve its overall quality?",
      answerOptions: [
        { answerText: "Formatting", isCorrect: false },
        { answerText: "Proofreading", isCorrect: false },
        { answerText: "Polishing", isCorrect: true },
        { answerText: "Casting", isCorrect: false }
      ]
    },
    {
    questionText: "Who is the person responsible for the overall creative vision of a film?",
    answerOptions: [
      { answerText: "Producer", isCorrect: false },
      { answerText: "Director", isCorrect: true },
      { answerText: "Screenwriter", isCorrect: false },
      { answerText: "Editor", isCorrect: false }
    ]
  },
  {
    questionText: "What department is responsible for the visual effects seen in a film?",
    answerOptions: [
      { answerText: "Costume design", isCorrect: false },
      { answerText: "Visual effects (VFX)", isCorrect: true },
      { answerText: "Sound design", isCorrect: false },
      { answerText: "Makeup", isCorrect: false }
    ]
  },
  {
    questionText: "What is the process of filming a scene multiple times from different angles?",
    answerOptions: [
      { answerText: "Editing", isCorrect: false },
      { answerText: "Continuity", isCorrect: false },
      { answerText: "Multi-camera setup", isCorrect: true },
      { answerText: "Multiple takes", isCorrect: true }
    ]
  },
  {
    questionText: "What is the term for the planned schedule for filming a movie?",
    answerOptions: [
      { answerText: "Storyboard", isCorrect: false },
      { answerText: "Call sheet", isCorrect: true },
      { answerText: "Script", isCorrect: false },
      { answerText: "Treatment", isCorrect: false }
    ]
  },
  {
    questionText: "What is the process of adding sound effects, dialogue, and music to a film?",
    answerOptions: [
      { answerText: "Foley", isCorrect: true },  // Include Foley for a more specific answer
      { answerText: "Post-production", isCorrect: true },
      { answerText: "Scoring", isCorrect: false },  // Scoring is a part of post-production
      { answerText: "Sound mixing", isCorrect: false }  // Sound mixing is a part of post-production
    ]
  },
  {
    questionText: "What is the difference between a producer and a director?",
    answerOptions: [
      { answerText: "The producer manages the budget and logistics, while the director focuses on the creative aspects", isCorrect: true },
      { answerText: "A director manages the actors, while a producer focuses on marketing", isCorrect: false },
      { answerText: "There is no difference; they are the same role", isCorrect: false },
      { answerText: "A producer acts in the film, while a director oversees everything", isCorrect: false }
    ]
  },
  {
    questionText: "What is the role of a gaffer on a film set?",
    answerOptions: [
      { answerText: "Head electrician", isCorrect: true },
      { answerText: "Cinematographer", isCorrect: false },
      { answerText: "Costume designer", isCorrect: false },
      { answerText: "Makeup artist", isCorrect: false }
    ]
  },
  {
    questionText: "What is the difference between location scouting and location shooting?",
    answerOptions: [
      { answerText: "Location scouting involves finding filming locations, while location shooting happens at those places", isCorrect: true },
      { answerText: "Location scouting involves building sets for filming, while location shooting happens on real-world locations", isCorrect: false },
      { answerText: "There is no difference; they are the same term", isCorrect: false },
      { answerText: "Location scouting involves hiring security for the set, while location shooting involves filming", isCorrect: false }
    ]
  },
  {
    questionText: "What is the importance of continuity in filmmaking?",
    answerOptions: [
      { answerText: "Ensuring consistency in details like props, clothing, and hairstyles throughout the film to maintain believability", isCorrect: true },
      { answerText: "Keeping the actors energized during filming", isCorrect: false },
      { answerText: "Maintaining a consistent shooting schedule", isCorrect: false },
      { answerText: "Managing the film's budget effectively", isCorrect: false }
    ]
  },
  {
    questionText: "Who is the person responsible for the overall creative vision of a film?",
    answerOptions: [
      { answerText: "Producer", isCorrect: false },
      { answerText: "Director", isCorrect: true },
      { answerText: "Screenwriter", isCorrect: false },
      { answerText: "Editor", isCorrect: false }
    ]
  },
  ];
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  };
  return (
    <>
    <SignedIn>
    <div className='app11'>
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {shuffledQuestions.length}
          <button onClick={handleRestartQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <>
          {shuffledQuestions.length > 0 && (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{shuffledQuestions.length}
                </div>
                <div className='question-text'>{shuffledQuestions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {shuffledQuestions[currentQuestion].answerOptions.map((answerOption) => (
                  <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                  ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  </div>
   </SignedIn>
   <SignedOut>
     <RedirectToSignIn />
   </SignedOut>
      </>
  );
}
export default Quiz;
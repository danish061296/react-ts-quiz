import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { QuestionState, fetchQuizQuestions, DifficultyLevels } from './API';
import { GlobalStyle, Wrapper } from './App.styles';

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [quizIsOver, setQuizIsOver] = useState(true);

  console.log(questions);

  const startQuiz = async () => {
    setIsLoading(true);
    setQuizIsOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      DifficultyLevels.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setCurrentQuestionNumber(0);
    setIsLoading(false);

    // missing error handling
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!quizIsOver) {
      // get the answer that user selected
      const answer = e.currentTarget.value;
      // check answer against our correct answers
      const correctAnswer =
        questions[currentQuestionNumber].correct_answer === answer;
      // add score if their answer is correct
      if (correctAnswer) setScore((prevScore) => prevScore + 1);
      // save answer in the answers array for user's answers
      const userAnswer = {
        question: questions[currentQuestionNumber].question,
        answer,
        correct: correctAnswer,
        correctAnswer: questions[currentQuestionNumber].correct_answer,
      };

      setUserAnswers([...userAnswers, userAnswer]);
    }
  };

  const getNextQuestion = () => {
    // move on to next question if it's not the last questions
    const nextQuestion = currentQuestionNumber + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setQuizIsOver(true);
    } else {
      setCurrentQuestionNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quizzaria</h1>
        {quizIsOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {!quizIsOver && <p className="score">Score: {score}</p>}

        {isLoading && <p>Loading Questions....</p>}
        {!isLoading && !quizIsOver && (
          <QuestionCard
            questionNumber={currentQuestionNumber + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[currentQuestionNumber].question}
            answers={questions[currentQuestionNumber].answers}
            userAnswer={
              userAnswers ? userAnswers[currentQuestionNumber] : undefined
            }
            callback={checkAnswer}
          />
        )}
        {!quizIsOver &&
        !isLoading &&
        userAnswers.length === currentQuestionNumber + 1 &&
        currentQuestionNumber !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={getNextQuestion}>
            Next Question
          </button>
        ) : null}
        {quizIsOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <p className="playAgain">Click on Start to play again 😃</p>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;

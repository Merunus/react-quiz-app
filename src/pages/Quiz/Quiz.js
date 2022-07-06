import "./Quiz.css";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../../components/Question/Question";
function Quiz({ name, score, questions, setQuestions, setScore }) {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // useEffect(()=>{
  //   console.log(questions);

  //   setOptions(questions && handleShuffle([questions[currentQuestion]?.correct_answer, ...questions[currentQuestion]?.incorrect_answer]) )

  // }, [currentQuestion, questions])

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [currentQuestion, questions]);

  console.log(options);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quiz-info">
            <span>{questions[currentQuestion].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct_answer={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: "100px" }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}

export default Quiz;

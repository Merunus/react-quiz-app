import React, { useState } from "react";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Question.css";

function Question({
  questions,
  currentQuestion,
  setCurrentQuestion,
  options,
  correct_answer,
  score,
  setScore,
}) {
  // <-- This is props
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleSelect(item) {
    if (selected === item && selected === correct_answer) {
      return "select";
    } else if (selected === item && selected !== correct_answer) {
      return "wrong";
    } else if (item === correct_answer) {
      return "select";
    }
  }
  function handleCheck(item) {
    setSelected(item);
    if (item === correct_answer) {
      setScore(score + 1);
    }
    setError(false);
  }

  function handleNext() {
    if (currentQuestion > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {
      setError(true);
    }
  }

  function handleQuit() {}
  const firstBtnStyle = {
    margin: "0 10px",
    width: "185px",
  };
  const styleForAlert = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="questionContainer">
      <h1>Question {currentQuestion + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>
      </div>
      <div className="options">
        {error && (
          <Alert style={styleForAlert} severity="warning">
            Please choose one option!
          </Alert>
        )}
        {options &&
          options.map((i) => {
            return (
              <button
                disabled={selected}
                key={i}
                className={`single-option  ${selected && handleSelect(i)}`}
                onClick={() => handleCheck(i)}
              >
                {i}
              </button>
            );
          })}
      </div>
      <div className="controls">
        <Button
          style={firstBtnStyle}
          variant="contained"
          color="secondary"
          size="large"
          href="/"
          onClick={handleQuit}
        >
          Quit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={firstBtnStyle}
          onClick={handleNext}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
}

export default Question;

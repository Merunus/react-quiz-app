import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Result.css";
import { Button } from "@mui/material";

function Result({ score, name }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Link
        style={{ alignSelf: "center", marginTop: "20px", fontSize: "1.6em" }}
        to="/react-quiz-app"
      >
        Back to home page{" "}
      </Link>
    </div>
  );
}

export default Result;

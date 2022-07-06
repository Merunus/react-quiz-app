import { MenuItem, TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Categories from "../../data/categories";

function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: "30px" }}>Quiz Settings</span>

        <div className="settings-select">
          {error && (
            <Alert severity="warning">Please fill all the prompts!</Alert>
          )}

          <TextField
            style={{ margin: "25px" }}
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Select category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            style={{ margin: "25px" }}
          >
            {Categories.map((cat) => {
              return (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            select
            style={{ margin: "25px" }}
            label="Select difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
            variant="outlined"
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              {" "}
              Hard
            </MenuItem>
          </TextField>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="large"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;

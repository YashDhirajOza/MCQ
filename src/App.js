import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import MatrixBackground from "./MatrixBackground";
import { gsap } from "gsap";
import "./style.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  // Fetch questions from Firestore
  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  // GSAP Animations
  useEffect(() => {
    gsap.from("h1", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
    gsap.from(".question-box", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, [questions]);

  // Handle answer selection
  const handleAnswer = (questionId, option) => {
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      // Update selected answers
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: option,
      }));

      // Check if the selected answer is correct
      if (option === question.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  return (
    <div>
      <MatrixBackground />
      <h1>MCQ Web App</h1>
      <div className="score">
        <p>Score: {score}</p>
      </div>
      {questions.map((q, index) => (
        <div key={q.id} className="question-box">
          <p>
            {index + 1}. {q.question}
          </p>
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(q.id, option)}
              className={
                selectedAnswers[q.id] === option
                  ? option === q.correctAnswer
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;

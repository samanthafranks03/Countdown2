import { useState, useEffect } from "react";
import Button from './Button';

//Function from stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    const newArr = [...array]; 
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    return newArr;
  }

export default function Question({ questionData }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
    const shuffled = shuffleArray(allAnswers);
    setShuffledAnswers(shuffled);
  }, [questionData]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setIsCorrect(answer === questionData.correct_answer);
  };

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: questionData.question }} />
      <div>
        {shuffledAnswers.map((answer, index) => (
          <Button
            key={index}
            onClick={() => handleAnswerSelection(answer)}
        // Source for code below: https://legacy.reactjs.org/docs/dom-elements.html
          >
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </Button>
        ))}
      </div>
      {isAnswered && (
        <p style={{ color: isCorrect ? "green" : "red" }}>
          {isCorrect ? "Correct answer!" : `Wrong answer`}
        </p>
      )}
    </div>
  );
}
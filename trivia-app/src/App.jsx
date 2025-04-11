import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Question from "./components/Question";

function App() {
  const API_URL = `https://opentdb.com/api.php?amount=10&type=multiple`;
  const [questionData, setQuestionData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.response_code == 0){
          setQuestionData(data.results);
          setIsLoading(false);
        }
      }
      catch (error){
        setError(error);
        console.error("There was an error fetching the data", error);
        setIsLoading(false);
      }
    };
    fetchQuestionData();
  }, [])
  if (isLoading){
      return (
      <>
        <p>Loading</p>
      </>
      );
  }


  return (
      <>
        <div>
          <h1>Quiz Questions</h1>
          {questionData.map((question, index) => (
            <Question key={index} questionData={question} />
          ))}
        </div>
      </>
    );
  }

export default App

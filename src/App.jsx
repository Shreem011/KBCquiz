import React, { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" 0 K");
  const [questions, setQuestions] = useState([]); // Use `questions` instead of `data`

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyB84Xp3nSmLTnXGlYCeTLy5NoyXxe8TQTc",
      authDomain: "kbc-quiz123.firebaseapp.com",
      databaseURL: "https://kbc-quiz123-default-rtdb.firebaseio.com",
      projectId: "kbc-quiz123",
      storageBucket: "kbc-quiz123.appspot.com",
      messagingSenderId: "413317918932",
      appId: "1:413317918932:web:132c814f68fbcde9750b41",
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    // Set up the reference to the "questions" node
    const questionsRef = ref(db, "questions");

    // Listen for changes in the data
    onValue(questionsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data from Firebase:", data);
      setQuestions(data);
    });
  }, []);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const moneyPyramid = useMemo(
    () =>
      [
        { id: "1", amount: "5 k" },
        { id: "2", amount: "50 k" },
        { id: "3", amount: "500 k" },
        { id: "4", amount: "5000 k" },
        { id: "5", amount: "50000 k" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id == questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  const randomNumber = getRandomNumber(0, 2);

  return (
    //the whole page
    <div className="app">
      {username ? (
        <>
          {" "}
          <div className="main">
            {stop ? (
              <h1 className="endText">You Earned : {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    question={questions}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    randomNumber={randomNumber}
                  />
                </div>
              </>
            )}
          </div>
          {/* right part -the money pyramid */}
          <div className="pyramid">
            {/* container containing list of enlisted money */}
            <ul className="moneyList">
              {/* the list item */}
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber == m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemIndex">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
